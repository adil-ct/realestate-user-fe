import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";

// Static imports
import PropertyInvestModal from "components/Modal/PropertyInvestModal";
import PropertyCard from "components/Cards/Investor/PropertyCard";
import { noInvestment } from "constants/assets";
import MKTypography from "components/custom/MKTypography";
import MKBox from "components/custom/MKBox";
import {
  getPropertyListSaga,
  profileFetch,
  getWalletBalance,
} from "store/actions";
import { NoProperty } from "constants/assets";
import SearchBox from "components/search";

import styles from "./styles";
import { setTourPropertyId, setTourHoverCardIndex } from "store/actions";
import SkeltonCard from "components/Cards/Investor/SkeltonCard";
import RegisterModal from "components/Modal/RegisterModal";

const Investor = () => {
  const classes = styles();
  const isLogedin = localStorage.getItem("authToken");
  const { propertyList, isLoading } = useSelector((state) => state.marketplace);
  const dispatch = useDispatch();
  const [skeltonLoader, setSkeltonLoader] = useState(true);
  const { userData, isLogin } = useSelector((state) => state.auth);
  const { state } = useLocation();
  const [upcomingProperties, setUpcomingProperties] = useState([]);
  const [trendingProperties, setTrendingProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState({});
  const [investOpen, setInvestOpen] = useState(false);
  const [hoverCard, setHoverCard] = useState([]);
  const [tempLoading, setTempLoading] = useState(true);
  const [openRegister, setOpenRegsiter] = useState(!isLogedin ? true : false);
  const [searchText, setSearchText] = useState("");
	const [searchFlag, setSearchFlag] = useState("");

	let timeout = "";
	const handleSearch = (e) => {
		setSearchText(e.target.value);
    console.log(searchText)
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			setSearchFlag(e.target.value);
		}, 700);
	};

  useEffect(() => {
    if (localStorage.getItem("authToken") && openRegister) {
      dispatch(getWalletBalance());
      setOpenRegsiter(false);
    }
  }, [isLogin]);

  useEffect(() => {
    const { access } = state || "";
    if (access) {
      handelInvestModal();
    }
  }, [state]);

  const handelInvestModal = () => {
    if (!userData?.address1 && !userData?.dob) {
      return false;
    } else {
      return true;
    }
  };

  const handleInvestClick = (property) => {
    if (property) {
      setSelectedProperty(property);
    }
    setInvestOpen(true);
  };

  useEffect(() => {
		if (userData) {
			dispatch(profileFetch());
		}
		isLogedin && dispatch(getWalletBalance());
		dispatch(
			getPropertyListSaga({
				qp:
					"startIndex=1&itemsPerPage=100" + (searchText !== ""
						? `&search=${searchText}`
						: ""), //+ `&search=${searchText}`,
				handleSuccess: () => setSkeltonLoader(false),
			})
		);
		console.log(searchText);
		window.history.replaceState({}, document.title);
	}, [searchFlag]);

  useEffect(() => {
    const trendingPropertiesTemp = [],
      upcomingPropertiesTemp = [];

    if (propertyList && propertyList?.length) {
      for (let i = 0; i < propertyList.length; i++) {
        if (propertyList[i]?.trending) {
          trendingPropertiesTemp.push(propertyList[i]);
        } else {
          upcomingPropertiesTemp.push(propertyList[i]);
        }
      }

      setTrendingProperties(trendingPropertiesTemp);
      setUpcomingProperties(upcomingPropertiesTemp);
      setTempLoading(false);
      const firstInvestProperty = upcomingPropertiesTemp?.findIndex(
        (item) => item?.numberOfTokens - item?.tokensSold
      );
      if (firstInvestProperty === -1) {
        dispatch(setTourHoverCardIndex(0));
        dispatch(setTourPropertyId(upcomingPropertiesTemp[0]?._id));
      } else {
        dispatch(setTourHoverCardIndex(firstInvestProperty));
        dispatch(
          setTourPropertyId(upcomingPropertiesTemp[firstInvestProperty]?._id)
        );
      }
      const hoverState = [...Array(upcomingPropertiesTemp.length)]?.map(() => ({
        status: false,
      }));
      setHoverCard(hoverState);
    }
  }, [propertyList]);

  return (
    <>
      <Box className={classes.paddingContainer}>
        <Box>
          <Box
            className={`main-content-container ${classes.mainContainer} ${classes.investorPage}`}
          >
            {skeltonLoader || isLoading ? (
              <Box className="max-width-app">
                <Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
								>
									<Box display="flex" alignItems="center">
										<CottageIcon alt="home" className={classes.homeIcon} />
										<MKTypography
											variant="h2"
											fontWeight="bold"
											className={classes.heading1}
										>
											Properties
										</MKTypography>
									</Box>

									<SearchBox value="" isPropertySearch={true}  handleTextChange={handleSearch} />
								</Box>
                <Box className={classes.topTrending}>
                  {[...Array(6)]?.map((property, index) => (
                    <SkeltonCard key={index} />
                  ))}
                </Box>
              </Box>
            ) : trendingProperties?.length === 0 &&
              upcomingProperties?.length === 0 ? (
              <>
                <Box className="max-width-app">
                <Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
								>
									<Box display="flex" alignItems="center">
										<CottageIcon alt="home" className={classes.homeIcon} />
										<MKTypography
											variant="h2"
											fontWeight="bold"
											className={classes.heading1}
										>
											Properties
										</MKTypography>
									</Box>

									<SearchBox value="" isPropertySearch={true}  handleTextChange={handleSearch} />
								</Box>
                  <Box className={classes.noContentBox}>
                    <img src={NoProperty} alt="No Data" />
                    <span className={classes.noContentText}>
                      No Properties Available
                    </span>
                  </Box>
                </Box>
              </>
            ) : !trendingProperties?.length &&
              !upcomingProperties?.length &&
              !tempLoading ? (
              <MKBox className={classes.noContentBox}>
                <img src={noInvestment} alt="No Investment" />
                <span className={classes.noContentText}>
                  New Investment Options are on the way, Stay Tuned!
                </span>
              </MKBox>
            ) : (
              <>
                <Box className="max-width-app">
                <Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
								>
									<Box display="flex" alignItems="center">
										<CottageIcon alt="home" className={classes.homeIcon} />
										<MKTypography
											variant="h2"
											fontWeight="bold"
											className={classes.heading1}
										>
											Properties
										</MKTypography>
									</Box>

									<SearchBox value="" isPropertySearch={true}  handleTextChange={handleSearch} />
								</Box>
                  <Box className={classes.topTrending}>
                    {trendingProperties?.map((property, index) => (
                      <PropertyCard
                        key={index}
                        data={property}
                        hoverCard={hoverCard}
                        setHoverCard={setHoverCard}
                        open={investOpen}
                        handleClose={() => handleInvestClick(property)}
                        index={index}
                      />
                    ))}
                    {upcomingProperties?.map((property, index) => (
                      <PropertyCard
                        key={index}
                        data={property}
                        hoverCard={hoverCard}
                        setHoverCard={setHoverCard}
                        open={investOpen}
                        handleClose={() => handleInvestClick(property)}
                        index={index}
                      />
                    ))}
                  </Box>
                </Box>
              </>
            )}
          </Box>
          {investOpen && (
            <PropertyInvestModal
              pricePerToken={selectedProperty?.pricePerToken}
              open={investOpen}
              handleClose={() => setInvestOpen(false)}
              id={selectedProperty?._id}
              totalSoldTokenPercantage={selectedProperty?.tokensSoldPercentage}
              numberOfTokens={selectedProperty?.numberOfTokens}
              tokensSold={selectedProperty?.tokensSold}
              minInvestment={selectedProperty?.minInvestment || 0}
              handleInvestClick={handelInvestModal}
              property={selectedProperty}
            />
          )}
          {openRegister && (
            <RegisterModal
              noSubHeader={true}
              open={openRegister}
              handleClose={() => setOpenRegsiter(false)}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Investor;
