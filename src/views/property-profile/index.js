import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "utils/useQuery";
import moment from "moment";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TableContainer from "@mui/material/TableContainer";
import TimelineContent from "@mui/lab/TimelineContent";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TimelineDot from "@mui/lab/TimelineDot";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import Timeline from "@mui/lab/Timeline";
import Table from "@mui/material/Table";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as chartToolTip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Static imports
import {
  // MarketingRating,
  // PropertyGrowth,
  noDonwloads,
  // Googlemaps,
  // RentGrowth,
  // RentGrowth,
  Dotloader,
  noGraph,
} from "constants/assets";
import {
  ThreeDotsSpinner,
  OvalSpinner,
} from "components/Loader/GenericLoaders";
import colors from "assets/theme/base/colors";
import Timer from "components/Timer";
import PhoneNumberVerificationModal from "components/Modal/PhoneNumberVerificationModal";
import { DISABLE_INVEST } from "constants/env";
import CurrencyFormat from "components/CurrencyFormat";
// import DepositScreens from "components/Modal/DepositScreens";
import PropertDetailsCard from "components/Cards/Investor/PropertDetailsCard";
import PropertyInvestModal from "components/Modal/PropertyInvestModal";
import PhotosViewerModal from "components/Modal/PhotosViewerModal";
import MKTypography from "components/custom/MKTypography";
import GMapModal from "components/Modal/GMapModal";
import MKButton from "components/custom/MKButton";
import MKBox from "components/custom/MKBox";
import RegisterModal from "components/Modal/LoginModal";
import {
  profileFetch,
  getServiceFees,
  getPropertyDetailsSaga,
  emailVerificationSaga,
  resendOtpSaga,
  getWalletBalance,
} from "store/actions";
import getTimeRemaining from "utils/getRemainingTime";
import styles from "./styles";
import "@react-pdf-viewer/core/lib/styles/index.css";
import Rationale from "./Rationale";
import InvestmentTab from "../../components/investment-tab/InvestmentTab";
import { ArrowBack, LocationOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SimilarProperties from "./SimilarProperties";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  chartToolTip,
  Legend
);

// const onDocumentDownload = (docUrl) => {
//   if (!docUrl) {
//     return;
//   }
//   const link = document.createElement("a");
//   link.setAttribute("display", "none");
//   link.download = docUrl;
//   link.href = docUrl;
//   link.target = "_blank";
//   link.click();
//   link.remove();
// };

const barChartScaleOptions = {
  y: {
    ticks: {
      callback: function (value) {
        let formattedVal =
          Number(value) >= 1000 ? Number(value) / 1000 + "k" : value.toFixed(2);
        return "$" + formattedVal;
      },
    },
    // grid: {
    //   color: "#FAFAFA",
    // },
  },
  x: {
    gridLines: { color: colors.grey[50] },
    display: true, // this will hide vertical lines,
    grid: {
      // borderColor: "#fff",
      borderWidth: 0,
      // color: "#fff",
    },
  },
};

export const barChartOptionsRent = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let label =
            "Median Rent (PSF): $" + Number(context?.formattedValue).toFixed(2);
          return label;
        },
      },
    },
  },
  scales: barChartScaleOptions,
};

export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = "Median Property Value: $" + context.formattedValue;
          return label;
        },
      },
    },
  },
  scales: barChartScaleOptions,
};

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    borderBottom: `1px solid ${colors.grey[50]}`,
    color: colors.bodyText.primary,
    fontWeight: "500",
    fontSize: "14px",
    minWidth: "90px",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: "24px 0" }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PropertyProfile = () => {
  const classes = styles();
  const authToken = !!localStorage.getItem("authToken");
  const { propertyData, isLoading } = useSelector((state) => state.marketplace);
  const { userData, isLoading: authLoader } = useSelector(
    (state) => state.auth
  );
  const [openRegister, setOpenRegsiter] = useState(!authToken ? true : false);
  const [emailVerify, setEmailVerify] = useState(false);
  const [photosViewer, setPhotosViewer] = useState(false);
  const [invApprication, setInvApprication] = useState(0);
  const [rentSelected, setRentSelected] = useState(false);
  const [invTableData, setInvTableData] = useState({});
  const [offerTableData, setOfferTableData] = useState({});
  const [inViewPort, setInViewPort] = useState(true);
  const [propertyObj, setPropertyObj] = useState({});
  const [mapDialog, setMapDialog] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [invToken, setInvToken] = useState(0);
  const [invRent, setInvRent] = useState(0);
  const [investOpen, setInvestOpen] = useState(false);

  const { hours, minutes, seconds, days } = getTimeRemaining(
    propertyData?.data?.startDate
  );
  const dispatch = useDispatch();
  const query = useQuery();
  const id = query.get("id");
  const invOpen = query.get("invest");
  const ref = useRef();
  const navigate = useNavigate();

  const validateOpen = () => {
    // Check if tokens are available for purchase
    const tokensAvailable = (propertyObj?.rationale?.numberOfTokens || 0) - (propertyObj?.rationale?.tokensSold || 0);
    
    if (
      tokensAvailable > 0 &&
      DISABLE_INVEST !== "true" &&
      userData?.userType !== "property_manager" &&
      authToken
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!investOpen && invOpen && propertyObj?.rationale) {
      setInvestOpen(validateOpen());
    }
  }, [propertyObj, authToken]);

  useEffect(() => {
    if (localStorage.getItem("authToken") && openRegister) {
      dispatch(getWalletBalance());
      setOpenRegsiter(false);
    }
  }, [authToken]);

  const handleChange = (event, newValue) => {
    let tabSelected = event.target.textContent.toLowerCase();
    tabSelected = tabSelected == "process" ? "buyProcess" : tabSelected;
    setTabValue(newValue);
    if (!propertyObj[tabSelected]) {
      dispatch(getPropertyDetailsSaga({ tabSelected, id }));
    }
  };

  const otpData = {
    email: userData?.email,
  };

  const handleEmailVerificationSuccess = () => {
    setEmailVerify(false);
    dispatch(profileFetch());
  };

  const handlePhoneVerificationNext = (requestBody) => {
    dispatch(
      emailVerificationSaga({
        requestBody,
        handleSuccess: handleEmailVerificationSuccess,
        handleFail: () => {},
      })
    );
  };

  const handleResend = () => {
    const requestBody = {
      channel: "Email",
      email: userData?.email,
    };
    dispatch(resendOtpSaga({ requestBody }));
  };

  const handleInvestClick = () => {
    setInvestOpen(true);
  };

  const handelInvestModal = () => {
    if (!userData?.emailVerified) {
      setEmailVerify(true);
      return null;
    } else if (!userData?.address1 && !userData?.dob) {
      return false;
    } else {
      return true;
    }
  };

  const handelMapModal = () => {
    setMapDialog(!mapDialog);
  };

  const onPhotosViewerClick = () => {
    setPhotosViewer(!photosViewer);
  };

  useEffect(() => {
    if (userData) {
      dispatch(profileFetch());
      dispatch(getServiceFees());
    }
    dispatch(getPropertyDetailsSaga({ tabSelected: "rationale", id }));
    authToken && dispatch(getWalletBalance());
    window.scrollTo(0, 0);
    const onScroll = () => {
      if (ref && ref?.current) {
        const elePos = ref.current.getBoundingClientRect().top + 350; // 300 for escaping image carousel
        setInViewPort(elePos < 0 ? false : true);
      }
    };
    return () => window.removeEventListener("scroll", onScroll);
  }, [id]);

  useEffect(() => {
    if (tabValue == 0) {
      setPropertyObj({ ...propertyObj, rationale: propertyData?.data });
    } else if (tabValue == 1) {
      const alterDesc = propertyData?.data?.description 
        ? propertyData.data.description.replace(/\n/g, "\n\n<br/>")
        : "";
      const alterObj = { alterDesc, ...propertyData?.data };
      setPropertyObj({ ...propertyObj, overview: alterObj });
    } else if (tabValue == 2) {
      let chartLabels = propertyData?.data?.marketDetails?.marketChart?.map(
        (ele) => Number(ele.year)
      );
      let appriciationChartData = {
        labels: chartLabels,
        datasets: [
          {
            label:
              propertyData?.data?.marketDetails?.marketChart?.length +
              "-Year Historical Property Values",
            data: propertyData?.data?.marketDetails?.marketChart?.map((ele) =>
              Number(ele?.appreciation)
            ),
            backgroundColor: colors.callToAction.secondary.main,
          },
        ],
      };
      let rentChartData = {
        labels: chartLabels,
        datasets: [
          {
            label:
              propertyData?.data?.marketDetails?.marketChart?.length +
              "-Year Historical Rent (Per Square Foot) Growth",
            data: propertyData?.data?.marketDetails?.marketChart?.map((ele) =>
              Number(ele?.rent)
            ),
            backgroundColor: colors.callToAction.secondary.light,
          },
        ],
      };
      let marketData = {
        ...propertyData?.data,
        appriciationChartData,
        rentChartData,
        alteredDesc: propertyData?.data?.marketDetails?.description 
          ? propertyData.data.marketDetails.description.replace(/\n/g, "\n\n<br/>")
          : "",
        noChartData: propertyData?.data?.marketDetails?.marketChart?.length
          ? false
          : true,
      };

      setPropertyObj({ ...propertyObj, market: marketData });
    } else if (tabValue == 3) {
      let invVal = Math.ceil(
        (propertyData?.data?.projectedValues?.defaultTokensPurchased /
          propertyData?.data?.numberOfTokens) *
          100
      );
      invVal = invVal > 100 ? 100 : invVal;
      setInvToken(invVal);

      const apprcVal =
        Number(propertyData?.data?.projectedValues?.defaultAnnualAppreciation) >
        100
          ? 100
          : Number(
              propertyData?.data?.projectedValues?.defaultAnnualAppreciation
            );
      setInvApprication(apprcVal);

      let rentVal = propertyData?.data?.projectedValues?.defaultRentGrowth;
      rentVal = rentVal > 100 ? 100 : rentVal;
      setInvRent(rentVal);

      setPropertyObj({ ...propertyObj, investment: propertyData.data });
    } else if (tabValue == 4) {
      setPropertyObj({ ...propertyObj, buyProcess: propertyData.data });
    } else if (tabValue == 5) {
      const allDocuments = [];
      propertyData?.data?.main?.forEach((ele) => {
        if (ele?.url) {
          allDocuments.push(ele);
        }
      });
      propertyData?.data?.others?.forEach((ele) => {
        if (ele?.url) {
          allDocuments.push(ele);
        }
      });
      propertyData?.data?.rentalDocuments?.forEach((ele) => {
        if (ele?.url) {
          allDocuments.push(ele);
        }
      });
      const sortedDocuments = allDocuments.sort(
        (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
      );
      const documentObj = { ...propertyData.data, sortedDocuments };
      setPropertyObj({ ...propertyObj, documents: documentObj });
    }
  }, [propertyData]);

  var timerTemp;

  useEffect(() => {
    clearInterval(timerTemp);
    timerTemp = setTimeout(() => {
      plotInvestmentData();
    }, 2000);

    return () => clearTimeout(timerTemp);
  }, [invApprication, invRent, invToken]);

  const handleApprSliderChange = (val) => {
    setInvApprication(val);
  };

  const handleRentSliderChange = (val) => {
    setInvRent(val);
  };

  const handleTokenSliderChange = (val) => {
    setInvToken(val);
  };

  const plotInvestmentData = () => {
    /* console.log(invRent, invApprication, invToken, 'Slider Change Value'); */

    /* 
            noOfTokens = defaultTokensPurchased,
            rentGrowth = defaultRentGrowth,
            appriciationGrowth = defaultAnnualAppreciation
        */
    const pricePerToken = propertyObj?.investment?.pricePerToken,
      laveragedCashFlowMargin =
        propertyObj?.investment?.projectedValues?.leveragedCashflowMargin,
      defaultMonthlyRent =
        propertyObj?.investment?.projectedValues?.defaultMonthlyRent,
      totalTokens = propertyObj?.investment?.numberOfTokens,
      noOfTokens = (invToken * totalTokens) / 100,
      appriciationGrowth = invApprication / 100,
      rentGrowth = invRent / 100,
      purchasePrice = propertyObj?.investment?.assetValue;

    let investmentArr = [],
      rentGrowthArr = [],
      _rentGrowthArr = [],
      appriciationArr = [],
      _appriciationArr = [],
      years = [],
      profitArr = [],
      totalGrossProfitArr = [],
      totalHoldings = [],
      year = Number(propertyObj?.investment?.investmentYear) || 2021,
      totalGrossProfit = 0;

    let _appriciationVal = 0,
      _rentGrowthVal = 0;
    for (let i = 0; i < laveragedCashFlowMargin?.length; i++) {
      if (i) {
        year++;
      }
      let investment = pricePerToken * noOfTokens;
      let annualRentGrowth = Math.round(
        defaultMonthlyRent *
          12 *
          (laveragedCashFlowMargin[i] / 100) *
          Math.pow(1 + rentGrowth, i) *
          (noOfTokens / totalTokens)
      );

      let previousAppriciationSum = 0;
      if (i) {
        previousAppriciationSum =
          (purchasePrice * Math.pow(1 + appriciationGrowth, i) -
            purchasePrice) *
          (noOfTokens / totalTokens);
      }

      let appriciation =
        Math.round(
          (purchasePrice * Math.pow(1 + appriciationGrowth, i + 1) -
            purchasePrice) *
            (noOfTokens / totalTokens)
        ) - previousAppriciationSum;

      investmentArr.push(investment);

      rentGrowthArr.push(annualRentGrowth);
      _rentGrowthVal += annualRentGrowth;
      _rentGrowthArr.push(_rentGrowthVal);

      appriciationArr.push(appriciation);
      _appriciationVal += appriciation;
      _appriciationArr.push(_appriciationVal);
      const totalProfit = annualRentGrowth + appriciation;
      profitArr.push(totalProfit);
      totalGrossProfit += totalProfit;
      totalGrossProfitArr.push(totalGrossProfit);
      totalHoldings.push(investment + totalGrossProfit);
      years.push(year);
    }
    const stackBarChartData = {
      labels: years,
      datasets: [
        {
          label: "Investment",
          data: investmentArr,
          backgroundColor: colors.callToAction.secondary.dark,
        },
        {
          label: "Cumulative Appreciation",
          data: _appriciationArr,
          backgroundColor: colors.callToAction.secondary.light,
        },
        {
          label: "Cumulative Rental Income (Cash Flow)",
          data: _rentGrowthArr,
          backgroundColor: colors.callToAction.secondary.main,
        },
      ],
    };
    const debtChartData = {
      labels: [""],
      datasets: [
        {
          label: "Dataset 1",
          data: [propertyObj?.investment?.loanValues?.loanToValuePercentage],
          borderColor: colors.callToAction.secondary.dark,
          backgroundColor: colors.callToAction.secondary.dark,
          borderRadius: 70,
        },
        {
          label: "Dataset 2",
          data: [
            100 -
              Number(
                propertyObj?.investment?.loanValues?.loanToValuePercentage
              ),
          ],
          borderColor: colors.callToAction.secondary.main,
          backgroundColor: colors.callToAction.secondary.main,
          borderRadius: 70,
        },
      ],
    };

    console.log({data:{
      investmentArr,
      rentGrowthArr,
      appriciationArr,
      debtChartData,
      years,
      profitArr,
      totalGrossProfitArr,
      totalHoldings,
      stackBarChartData,
    }})
    setInvTableData({
      investmentArr,
      rentGrowthArr,
      appriciationArr,
      debtChartData,
      years,
      profitArr,
      totalGrossProfitArr,
      totalHoldings,
      stackBarChartData,
    });

    /*
      Temp hardcode - we'll update the API
    */
    const debt = propertyData?.data?.title === 'The Logan'  ? 665000 :
                 propertyData?.data?.title === 'The Roman'  ? 337500 : 
                 propertyData?.data?.title === 'Bowser Ave' ? 455000 :
                 propertyData?.data?.assetValue * ((propertyObj?.investment?.loanValues?.loanToValuePercentage || 0)/100);
    // const closingCosts = propertyData?.data?.title === 'The Logan'  ? 164000 :
    //                      propertyData?.data?.title === 'The Roman'  ? 101000 : 
    //                      propertyData?.data?.title === 'Bowser Ave' ? 1000 :
                        //  1000;


    // data static
    // const reservesAndClosing = propertyData?.data?.title === 'The Logan'  ? 240000 : // Jomar
    //                            propertyData?.data?.title === 'The Roman'  ? 137000 : // Tallheath
    //                            propertyData?.data?.title === 'Bowser Ave' ? 35840 :
    //                            5000;


    const mogulPlatformFee = propertyData?.data?.title === 'The Logan'  ? 28500 :   // Jomar
      propertyData?.data?.title === 'The Roman'  ? 13500 :   // Tallheath
      propertyData?.data?.title === 'Bowser Ave' ? 6500 : 
      1;
      console.log(propertyData?.data?.reserveAndClosingCost)
    setOfferTableData({
      purchasePrice: propertyData?.data?.assetValue,
      debt: debt,
      reservesAndClosing:  propertyData?.data?.reserveAndClosingCost,
      mogulBuyerFee : propertyData?.data?.mogulBuyerFee,
        //   propertyData?.data?.maintenanceReserveBalance
        // + propertyData?.data?.vacancyReserveBalance
        // + closingCosts,
      mogulPlatformFee: 
        (Number(propertyData?.data?.mogulFee) || 0) + mogulPlatformFee,
      totalOfferingAmount: totalTokens,
    });

    /* console.log('Calculated Data', investmentArr, rentGrowthArr, appriciationArr, years); */
  };

  return (
    <MKBox>
      <Box className={classes.paddingContainer}>
        <Box className={classes.mainContainer}>
          <Box className="max-width-app">
            <Box className={classes.dFlex}>
              <IconButton
                aria-label="Go Back"
                className={classes.goBack}
                onClick={() => navigate(-1)}
              >
                <ArrowBack />
              </IconButton>
              <LocationOn className={classes.headerIcon} />
              <MKTypography
                variant="h4"
                fontWeight="bold"
                className={classes.heading1}
              >
                {propertyData?.data?.title || "Property Title"}
              </MKTypography>
              <MKTypography
                fontSize="13px"
                // className={classes.grayFont}
                component="div"
                fontWeight="regular"
              >
                ({propertyData?.data?.city || "N/A"},{" "}
                {propertyData?.data?.state || "N/A"})
              </MKTypography>
            </Box>
            {/* <Box className={classes.badgeContainer}>
              <MKTypography
                variant="p"
                fontWeight="bold"
                className={classes.heading1}
              >
                {propertyData?.data?.tags?.slice(0, 3)?.map((ele, i) => (
                  <Box className={classes.propertyBadge} key={i}>
                    {ele}
                  </Box>
                ))}
              </MKTypography>
            </Box> */}

            <Box className={classes.tabsContainer}>
              <Tabs
                variant="scrollable"
                allowScrollButtonsMobile
                scrollButtons="auto"
                value={tabValue}
                onChange={handleChange}
                className="Joyride-tabBox"
                indicatorColor="secondary"
              >
                <Tab
                  disableRipple
                  className={`${classes.tabStyle} joyride-rational`}
                  label="Rationale"
                  {...a11yProps(0)}
                />
                <Tab
                  disableRipple
                  className={`${classes.tabStyle} joyride-overview`}
                  label="Overview"
                  {...a11yProps(1)}
                />
                <Tab
                  disableRipple
                  className={`${classes.tabStyle} joyride-market`}
                  label="Market"
                  {...a11yProps(2)}
                />
                <Tab
                  disableRipple
                  className={`${classes.tabStyle} joyride-investment`}
                  label="Investment"
                  {...a11yProps(3)}
                />
                <Tab
                  disableRipple
                  className={`${classes.tabStyle} joyride-process`}
                  label="Process"
                  {...a11yProps(4)}
                />
                <Tab
                  disableRipple
                  className={`${classes.tabStyle} joyride-documents`}
                  label="Documents"
                  {...a11yProps(5)}
                />
              </Tabs>
            </Box>
            <TabPanel value={tabValue} index={0} className={classes.tabPanel}>
              <Rationale
                ref={ref}
                propertyObj={propertyObj}
                handleInvestClick={handleInvestClick}
                onPhotosViewerClick={onPhotosViewerClick}
              />
            </TabPanel>
            <TabPanel value={tabValue} index={1} className={classes.tabPanel}>
              <Grid container spacing={5}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={8}
                  order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
                >
                  <Box className={classes.featureListBox}>
                    {/* <Grid item xs={4} sm={4} md={2}> */}
                    <Box className={classes.featureBox}>
                      <Box className={classes.featuresIconBox}>
                        <HomeOutlinedIcon fontSize="medium" />
                      </Box>
                      <MKTypography className={classes.featureLabel}>
                        {propertyObj?.overview?.rentalType}
                      </MKTypography>
                    </Box>
                    {/* </Grid> */}
                    {/* <Grid item xs={4} sm={4} md={2}> */}
                    <Box className={classes.featureBox}>
                      <Box className={classes.featuresIconBox}>
                        <BedOutlinedIcon fontSize="medium" />
                      </Box>
                      <MKTypography className={classes.featureLabel}>
                        {propertyObj?.overview?.bedrooms} Beds
                      </MKTypography>
                    </Box>
                    {/* </Grid> */}
                    {/* <Grid item xs={4} sm={4} md={2}> */}
                    <Box className={classes.featureBox}>
                      <Box className={classes.featuresIconBox}>
                        <BathtubOutlinedIcon fontSize="medium" />
                      </Box>
                      <MKTypography className={classes.featureLabel}>
                        {propertyObj?.overview?.bathTotal} Baths
                      </MKTypography>
                    </Box>
                    {/* </Grid> */}
                    {/* <Grid item xs={4} sm={4} md={2}> */}
                    <Box className={classes.featureBox}>
                      <Box className={classes.featuresIconBox}>
                        <SquareFootOutlinedIcon fontSize="medium" />
                      </Box>
                      <MKTypography className={classes.featureLabel}>
                        <CurrencyFormat
                          value={propertyObj?.overview?.area || ""}
                          onlyComma
                          noSpan={true}
                        />{" "}
                        Sq Ft
                      </MKTypography>
                    </Box>
                    {/* </Grid> */}
                    {/* <Grid item xs={4} sm={4} md={2}> */}
                    <Box className={classes.featureBox}>
                      <Box className={classes.featuresIconBox}>
                        {propertyObj?.overview?.isOccupied ? (
                          <CheckCircleOutlineOutlinedIcon fontSize="medium" />
                        ) : (
                          <CircleOutlinedIcon fontSize="medium" />
                        )}
                        {/* <img
                            src={
                              propertyObj?.overview?.isOccupied
                                ? Occupied
                                : Occupency
                            }
                            alt={"Occupency"}
                          /> */}
                      </Box>
                      <MKTypography className={classes.featureLabel}>
                        {propertyObj?.overview?.occupiedLabel === "Yes"
                          ? "Occupied"
                          : "Not Occupied"}
                      </MKTypography>
                    </Box>
                    {/* </Grid> */}
                    {/* <Grid item xs={4} sm={4} md={2}> */}
                    <Box className={classes.featureBox}>
                      <Box className={classes.featuresIconBox}>
                        <ConstructionOutlinedIcon fontSize="small" />
                      </Box>
                      <MKTypography className={classes.featureLabel}>
                        Built in {propertyObj?.overview?.yearBuilt}
                      </MKTypography>
                    </Box>
                    {/* </Grid> */}
                  </Box>
                  <Box className={classes.overviewTextsContainer}>
                    <MKTypography
                      fontSize="20px"
                      fontWeight="bold"
                      fontFamily="PP Fragment-Sans"
                      mb="24px"
                    >
                      Overview
                    </MKTypography>
                    <MKTypography
                      // color="secondary.main"
                      fontSize="16px"
                      fontWeight="bold"
                      fontFamily="PP Fragment-Sans"
                    >
                      {propertyObj?.overview?.descriptionHeading}
                    </MKTypography>
                    <MKTypography
                      fontFamily="PP Fragment-Sans"
                      /*color="secondary.dark"*/ component="p"
                      fontSize="15px"
                    >
                      {propertyObj?.overview?.descriptionSubHeading}
                    </MKTypography>
                    <MKTypography
                      fontFamily="PP Fragment-Sans"
                      component="p"
                      fontSize="16px"
                      className={classes.headerMargin}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: propertyObj?.overview?.alterDesc,
                        }}
                      ></span>
                    </MKTypography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  xl={4}
                  order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
                  ref={ref}
                >
                  <PropertDetailsCard
                    data={propertyObj?.rationale}
                    onInvestClick={handleInvestClick}
                    onPhotosViewerClick={onPhotosViewerClick}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={tabValue} index={2} className={classes.tabPanel}>
              <Grid container spacing={5}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={8}
                  order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
                >
                  {/* <Grid container spacing={2}> */}
                  <Box className={classes.marketStatsContainer}>
                    <Box className={classes.marketStats}>
                      {/* <Box> */}
                      <MKTypography
                        className={classes.marketStatsVal}
                        component="span"
                        fontFamily="PP Fragment-Sans"
                      >
                        {isLoading ? (
                          <ThreeDotsSpinner isLoading={true} />
                        ) : (
                          (propertyObj?.market?.marketDetails?.rentGrowth &&
                            propertyObj?.market?.marketDetails?.rentGrowth +
                              "%") ||
                          "N/A"
                        )}
                      </MKTypography>
                      <Tooltip
                        title="Growth in the market’s median rent from 5 years ago to today."
                        placement="top-start"
                      >
                        <MKTypography
                          className={`${classes.tooltipText} ${classes.marketStatsHead}`}
                          fontSize="14px"
                          // color="#2D355A"
                        >
                          Rent Growth
                        </MKTypography>
                      </Tooltip>
                      {/* </Box> */}
                      {/* <Box className={classes.iconBox}>
                        <img src={RentGrowth} alt="Currency Sign" />
                      </Box> */}
                    </Box>
                    {/* </Grid> */}

                    {/* <Grid item xs={4}> */}
                    <Box className={classes.marketStats}>
                      {/* <Box> */}
                      <MKTypography
                        className={classes.marketStatsVal}
                        component="span"
                        fontFamily="PP Fragment-Sans"
                      >
                        {isLoading ? (
                          <ThreeDotsSpinner isLoading={true} />
                        ) : (
                          (propertyObj?.market?.marketDetails?.propertyGrowth &&
                            propertyObj?.market?.marketDetails?.propertyGrowth +
                              "%") ||
                          "N/A"
                        )}
                      </MKTypography>
                      <Tooltip
                        title="Growth in the market’s median home value from 5 years ago to today."
                        placement="top-start"
                      >
                        <MKTypography
                          className={`${classes.tooltipText} ${classes.marketStatsHead}`}
                          fontSize="14px"
                          fontWeight="medium"
                          // color="#2D355A"
                        >
                          Property Growth
                        </MKTypography>
                      </Tooltip>
                      {/* </Box> */}
                      {/* <Box className={classes.iconBox}>
                        <img src={PropertyGrowth} alt="Currency Sign" />
                      </Box> */}
                    </Box>
                    {/* </Grid> */}

                    {/* <Grid item xs={4}> */}
                    <Box className={classes.marketStats}>
                      {/* <Box> */}
                      <MKTypography
                        className={classes.marketStatsVal}
                        component="span"
                        fontFamily="PP Fragment-Sans"
                      >
                        {isLoading ? (
                          <ThreeDotsSpinner isLoading={true} />
                        ) : (
                          propertyObj?.market?.marketDetails?.marketRating ||
                          "N/A"
                        )}
                      </MKTypography>
                      <Tooltip
                        title="Score of the market's performance compared to other markets in the US."
                        placement="top-start"
                      >
                        <MKTypography
                          className={`${classes.tooltipText} ${classes.marketStatsHead}`}
                          fontSize="14px"
                          fontWeight="medium"
                          // color="#2D355A"
                        >
                          Market Rating
                        </MKTypography>
                      </Tooltip>
                      {/* </Box> */}
                      {/* <Box className={classes.iconBox}>
                        <img src={MarketingRating} alt="Currency Sign" />
                      </Box> */}
                    </Box>
                  </Box>
                  {propertyObj?.market?.marketDetails?.description && (
                    <span
                      className={classes.marketDescription}
                      dangerouslySetInnerHTML={{
                        __html: propertyObj?.market?.alteredDesc,
                      }}
                    ></span>
                  )}
                  {!propertyObj?.market?.noChartData && !isLoading && (
                    <Grid
                      container
                      direction="row"
                      rowSpacing={0}
                      justifyContent="flex-end"
                      className={classes.mt30}
                    >
                      <MKButton
                        onClick={() => setRentSelected(true)}
                        variant={rentSelected ? "gradient" : "outlined"}
                        className={
                          rentSelected ? classes.customBtn : classes.mktBtns
                        }
                        // color="primary"
                      >
                        Rent (PSF)
                      </MKButton>
                      <MKButton
                        onClick={() => setRentSelected(false)}
                        variant={rentSelected ? "outlined" : "gradient"}
                        className={
                          !rentSelected
                            ? classes.customOutlineBtn
                            : classes.mktBtnsRight
                        }
                        // color="primary"
                      >
                        Property Values
                      </MKButton>
                    </Grid>
                  )}
                  {/* </Grid> */}
                  {propertyObj?.market?.noChartData ? (
                    <Box className={classes.noContentBox}>
                      <img src={noGraph} alt="No Graph Data" />
                      <span className={classes.noContentText}>
                        No Data Available
                      </span>
                    </Box>
                  ) : (
                    <Grid item xs={12} className={classes.mt30}>
                      <Box className={classes.chartBoxMarket}>
                        {rentSelected && propertyObj?.market?.rentChartData && (
                          <Bar
                            options={barChartOptionsRent}
                            data={propertyObj?.market?.rentChartData}
                          />
                        )}
                        {!rentSelected &&
                          propertyObj?.market?.appriciationChartData && (
                            <Bar
                              options={barChartOptions}
                              data={propertyObj?.market?.appriciationChartData}
                            />
                          )}
                      </Box>
                    </Grid>
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  xl={4}
                  order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
                  ref={ref}
                >
                  <PropertDetailsCard
                    data={propertyObj?.rationale}
                    onInvestClick={handleInvestClick}
                    onPhotosViewerClick={onPhotosViewerClick}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={tabValue} index={3} className={classes.tabPanel}>
              <InvestmentTab
                StyledTableCell={StyledTableCell}
                invTableData={invTableData}
                offerTableData={offerTableData}
                handleApprSliderChange={handleApprSliderChange}
                handleRentSliderChange={handleRentSliderChange}
                handleTokenSliderChange={handleTokenSliderChange}
                propertyObj={propertyObj}
                invRent={invRent}
                invApprication={invApprication}
                invToken={invToken}
                setInvApprication={setInvApprication}
                setInvRent={setInvRent}
                setInvToken={setInvToken}
                ref={ref}
                handleInvestClick={handleInvestClick}
                onPhotosViewerClick={onPhotosViewerClick}
              />
            </TabPanel>
            <TabPanel value={tabValue} index={4} className={classes.tabPanel}>
              <Grid container spacing={5}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={8}
                  order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
                >
                  {isLoading ? (
                    <div className={classes.flexCenter}>
                      <OvalSpinner isLoading={true} />
                    </div>
                  ) : (
                    <Timeline
                      className={classes.timelineBox}
                      sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                          flex: 0,
                          padding: 0,
                        },
                      }}
                    >
                      {propertyObj?.buyProcess?.buyProcess?.map((step, i) => (
                        <TimelineItem key={i}>
                          <TimelineSeparator>
                            <TimelineDot className={classes.timelineDotBox}>
                              <img src={Dotloader} height="20" alt="timeline" />
                              <div className={classes.timelineDot} />
                            </TimelineDot>
                            <TimelineConnector
                              className={classes.timelineConnector}
                            />
                          </TimelineSeparator>
                          <TimelineContent className={classes.timelineContent}>
                            <MKTypography
                              component="p"
                              className={classes.timelineStepLabel}
                              fontSize="14px"
                              fontWeight="medium"
                            >
                              Step {i + 1} |
                              <MKTypography
                                component="span"
                                className={classes.timelineStepLabel}
                                fontSize="14px"
                                fontStyle="italic"
                                fontWeight="regular"
                              >
                                {" "}
                                {moment(step?.date).format("Do MMM YYYY")}
                              </MKTypography>
                            </MKTypography>
                            <MKTypography
                              className={classes.mt16}
                              component="p"
                              fontSize="16px"
                              fontWeight="bold"
                            >
                              {step?.name}
                            </MKTypography>
                            <MKTypography
                              component="p"
                              className={classes.processDesc}
                            >
                              {step?.description}
                            </MKTypography>
                          </TimelineContent>
                        </TimelineItem>
                      ))}
                    </Timeline>
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  xl={4}
                  order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
                  ref={ref}
                >
                  <PropertDetailsCard
                    data={propertyObj?.rationale}
                    onInvestClick={handleInvestClick}
                    onPhotosViewerClick={onPhotosViewerClick}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={tabValue} index={5} className={classes.tabPanel}>
              <Grid container spacing={5}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={8}
                  order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
                >
                  {isLoading ? (
                    <div className={classes.flexCenter}>
                      <OvalSpinner isLoading={true} />
                    </div>
                  ) : (
                    <>
                      {!propertyObj?.documents?.sortedDocuments?.length ? (
                        <Box className={classes.noContentBox}>
                          <img src={noDonwloads} alt="No Downloads Available" />
                          <span className={classes.noContentText}>
                            No Data Available
                          </span>
                        </Box>
                      ) : (
                        <TableContainer>
                          <Table aria-label="Downloads table">
                            <TableHead>
                              <TableRow>
                                <TableCell className={classes.tableHead}>
                                  Document Name
                                </TableCell>
                                <TableCell className={classes.tableHead}>
                                  Uploaded On
                                </TableCell>
                                <TableCell
                                  className={classes.tableHead}
                                ></TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {propertyObj?.documents?.sortedDocuments?.map(
                                (ele, i) => (
                                  <TableRow key={i}>
                                    <StyledTableCell
                                      className={classes.styledTC}
                                    >
                                      <MKTypography
                                        variant="body1"
                                        className={classes.downloadTitle}
                                        fontSize="14px"
                                      >
                                        {ele?.key}
                                      </MKTypography>
                                    </StyledTableCell>
                                    <StyledTableCell
                                      className={`${classes.uploadDate} ${classes.styledTC}`}
                                    >
                                      <MKTypography
                                        fontSize="14px"
                                        component="span"
                                        fontWeight="regular"
                                      >
                                        {moment(ele?.createdAt).format("lll")}
                                      </MKTypography>
                                    </StyledTableCell>
                                    <StyledTableCell
                                      className={classes.styledTC}
                                    >
                                      <MKTypography
                                        target="_blank"
                                        component="a"
                                        href={ele?.url}
                                        download
                                      >
                                        <FileDownloadIcon
                                          className={classes.downloadIcon}
                                          // onClick={() => {
                                          //   onDocumentDownload(ele?.url);
                                          // }}
                                        />
                                      </MKTypography>
                                    </StyledTableCell>
                                  </TableRow>
                                )
                              )}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      )}
                    </>
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  xl={4}
                  order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
                  ref={ref}
                >
                  <PropertDetailsCard
                    data={propertyObj?.rationale}
                    onInvestClick={handleInvestClick}
                    onPhotosViewerClick={onPhotosViewerClick}
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </Box>
        <SimilarProperties id={id} />
        {!inViewPort && (
          <Grid container className={classes.footerWap}>
            <Grid item>
              <MKTypography className={classes.tokenLabel}>
                Number of tokens
              </MKTypography>
              <MKTypography className={classes.footerToken}>
                {
                  <CurrencyFormat
                    value={
                      propertyData?.data?.numberOfTokens -
                      propertyData?.data?.tokensSold
                    }
                    onlyComma
                    noSpan={true}
                  />
                }
                /
                {
                  <CurrencyFormat
                    value={propertyData?.data?.numberOfTokens}
                    onlyComma
                    noSpan={true}
                  />
                }{" "}
                <MKTypography className={classes.label} component="span">
                  Left
                </MKTypography>
              </MKTypography>
            </Grid>
            <Grid item>
              {days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0 ? (
                <MKBox className={classes.saleTimerBox}>
                  <Typography variant="h2" className={classes.saleText}>
                    Sale starts in
                  </Typography>
                  <Timer
                    endDate={
                      propertyData?.data?.startDate
                    } /*color="primary.main"*/
                  />
                </MKBox>
              ) : (
                <MKButton
                  variant="gradient"
                  disabled={
                    propertyData?.data?.numberOfTokens -
                      propertyData?.data?.tokensSold &&
                    DISABLE_INVEST !== "true" &&
                    userData?.userType !== "property_manager"
                      ? false
                      : true
                  }
                  // color="primary"
                  onClick={handleInvestClick}
                >
                  Invest
                </MKButton>
              )}
            </Grid>
          </Grid>
        )}
        {investOpen && (
          <PropertyInvestModal
            pricePerToken={propertyData?.data?.pricePerToken}
            id={id}
            totalSoldTokenPercantage={
              (propertyData?.data?.tokensSold /
                propertyData?.data?.numberOfTokens) *
              100
            }
            numberOfTokens={propertyData?.data?.numberOfTokens}
            tokensSold={propertyData?.data?.tokensSold}
            open={investOpen}
            handleClose={() => setInvestOpen(false)}
            property={propertyData?.data}
            minInvestment={propertyData?.data?.minInvestment || 0}
            handleInvestClick={handelInvestModal}
          />
        )}
        <GMapModal
          open={mapDialog}
          handleClose={handelMapModal}
          data={propertyObj?.rationale}
        />
        <PhotosViewerModal
          data={propertyObj?.rationale}
          open={photosViewer}
          handleClose={onPhotosViewerClick}
        />
        {/* { <DepositScreens open={openDeposit} setOpen={setOpenDeposit} /> */}
        <PhoneNumberVerificationModal
          title="Verify Email Address"
          description={`Enter code sent to ${
            userData?.email ? userData?.email : "xxxxxxxx"
          }`}
          show={emailVerify}
          setShow={setEmailVerify}
          otpData={otpData}
          onSubmit={handlePhoneVerificationNext}
          handleResend={handleResend}
          isLoading={authLoader?.emailVerification}
          email={userData?.email}
        />
        {openRegister && (
          <RegisterModal
            id={id}
            open={openRegister}
            handleClose={() => setOpenRegsiter(false)}
          />
        )}
      </Box>
    </MKBox>
  );
};

export default PropertyProfile;
