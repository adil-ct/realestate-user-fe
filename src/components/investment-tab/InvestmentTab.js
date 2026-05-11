import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  ThreeDotsSpinner,
  OvalSpinner,
} from "components/Loader/GenericLoaders";
import { Bar } from "react-chartjs-2";
import MKTypography from "components/custom/MKTypography";
import Tooltip from "@mui/material/Tooltip";
// import MKButton from "components/custom/MKButton";
import TableContainer from "@mui/material/TableContainer";
import styled from "styled-components";
import CurrencyFormat from "components/CurrencyFormat";
import PropertDetailsCard from "components/Cards/Investor/PropertDetailsCard";
// import { useState } from "react";
import { tableCellClasses } from "@mui/material/TableCell";
import colors from "assets/theme/base/colors";
import { useSelector } from "react-redux";
import styles from "../../views/property-profile/styles";
import { ButtonSum, CustonSlider } from "./style";

const InvestmentTab = ({
  StyledTableCell,
  invTableData,
  offerTableData,
  handleRentSliderChange,
  handleTokenSliderChange,
  handleApprSliderChange,
  propertyObj,
  invRent,
  invApprication,
  invToken,
  ref,
  handleInvestClick,
  onPhotosViewerClick,
  setInvApprication,
  setInvRent,
  setInvToken,
}) => {
  // const [investTools, setInvestTools] = useState(true);
  const { isLoading } = useSelector((state) => state.marketplace);
  const classes = styles();

  // const handelInvestTools = () => {
  //   setInvestTools(!investTools);
  // };

  const StyledTableCellHead = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
      borderBottom: `1px solid ${colors.grey[50]}`,
      color: colors.bodyText.primary,
      fontWeight: "400",
      textAlign: "left",
      fontSize: "14px",
    },
  }));
  const debtBarOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        display: false,
        // gridLines: {
        //   color: "#613ED2",
        // },
        grid: {
          // borderColor: "#fff",
          borderWidth: 0,
          // color: "#fff",
        },
      },
      y: {
        stacked: true,
        display: false,
        // grid: {
        //   color: "#fff",
        // },
      },
    },

    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.formattedValue + "%";
            return label;
          },
        },
      },
    },
  };

  const stackBarChartOptions = {
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
            let label = context.dataset.label || "";
            if (label) {
              label += " $" + context.formattedValue.split(".")[0];
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        display: true,
        // gridLines: { color: "#e2e2e2" },
        grid: {
          // borderColor: "#fff",
          borderWidth: 0,
          // color: "#fff",
        },
      },
      y: {
        stacked: true,
        display: true,
        ticks: {
          callback: function (value) {
            let formattedVal =
              Number(value) >= 1000 ? Number(value) / 1000 + "k" : value;
            return "$" + formattedVal;
          },
        },
        // grid: {
        //   color: "#fff",
        // },
      },
    },
  };

  return (
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
            <Box className={classes.progressBox}>
              {(invTableData?.debtChartData && (
                <Box className={classes.wrapBar}>
                  <Bar
                    options={debtBarOptions}
                    height={60}
                    data={invTableData?.debtChartData}
                  />
                  <span className={classes.labelBarLeft}>
                    {Math.floor(
                      propertyObj?.investment?.loanValues?.loanToValuePercentage
                    )}
                    %
                  </span>
                  <span className={classes.labelBarRight}>
                    {" "}
                    {Math.floor(
                      100 -
                        Number(
                          propertyObj?.investment?.loanValues
                            ?.loanToValuePercentage
                        )
                    )}
                    %
                  </span>
                </Box>
              )) || <ThreeDotsSpinner isLoading={true} />}
              <Tooltip
                title="The principal balance of the loan on the property."
                placement="top-start"
              >
                <MKTypography
                  className={`${classes.tooltipText} ${classes.mr20} ${classes.colorLigthGray}`}
                  component="span"
                  fontSize="16px"
                  fontWeight="regular"
                >
                  <span className={classes.circle} />
                  Debt
                </MKTypography>
              </Tooltip>
              <Tooltip
                title="The amount calculated by the value of the asset minus the balance of the loan."
                placement="top-start"
              >
                <MKTypography
                  className={`${classes.tooltipText} ${classes.mr20} ${classes.colorLigthGray}`}
                  component="span"
                  fontSize="16px"
                  fontWeight="regular"
                >
                  <span className={classes.lightCircle} />
                  Equity
                </MKTypography>
              </Tooltip>
            </Box>
            {/* <Grid container className={classes.toolsBox}>
              <Grid item xs={6} md={3}>
                <Tooltip
                  title="The percentage calculated by dividing the loan amount by the value of the property."
                  placement="top-start"
                >
                  <MKTypography
                    className={classes.tooltipText}
                    fontSize="14px"
                    component="span"
                    fontWeight="regular"
                  >
                    Loan-to-Value (LTV)
                  </MKTypography>
                </Tooltip>
                <MKTypography variant="h3" className={classes.investmentLabel}>
                  {propertyObj?.investment?.loanValues?.loanToValuePercentage
                    ? Math.floor(
                        propertyObj?.investment?.loanValues
                          ?.loanToValuePercentage
                      ) + "%"
                    : "N/A"}
                </MKTypography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Tooltip
                  title="The percentage charged by the lender to use their money to purchase the real estate."
                  placement="top-start"
                >
                  <MKTypography
                    className={classes.tooltipText}
                    fontSize="14px"
                    component="span"
                    fontWeight="regular"
                  >
                    Interest Rate
                  </MKTypography>
                </Tooltip>
                <MKTypography variant="h3" className={classes.investmentLabel}>
                  {propertyObj?.investment?.loanValues?.interestRate
                    ? Number(
                        propertyObj?.investment?.loanValues?.interestRate
                      ).toFixed(3) + "%"
                    : "-"}
                </MKTypography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Tooltip
                  title="The amount of time the loan will be paid back over."
                  placement="top-start"
                >
                  <MKTypography
                    className={classes.tooltipText}
                    fontSize="14px"
                    component="span"
                    fontWeight="regular"
                  >
                    Loan Term
                  </MKTypography>
                </Tooltip>
                <MKTypography variant="h3" className={classes.investmentLabel}>
                  {propertyObj?.investment?.loanValues?.loanTerm
                    ? propertyObj?.investment?.loanValues?.loanTerm / 12 > 1
                      ? (
                          propertyObj?.investment?.loanValues?.loanTerm / 12
                        ).toPrecision(2) + " Years"
                      : (
                          propertyObj?.investment?.loanValues?.loanTerm / 12
                        ).toPrecision(2) + " Year"
                    : "-"}
                </MKTypography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Tooltip
                  title="The total amount of the offering inclusive of the purchase price, reserves, and closing costs net of debt"
                  placement="top-start"
                >
                  <MKTypography
                    className={classes.tooltipText}
                    component="span"
                    // color="grey.300"
                    fontSize="14px"
                    fontWeight="regular"
                  >
                    Offering Amount
                  </MKTypography>
                </Tooltip>
                <MKTypography variant="h3" className={classes.investmentLabel}>
                  <CurrencyFormat
                    prefix={"$"}
                    zeroAllowed={false}
                    value={
                      propertyObj?.investment?.loanValues?.totalOfferingValue
                    }
                  />
                </MKTypography>
              </Grid>
            </Grid> */}

            <Grid item xs={12} className={classes.mtb30}>
              <TableContainer
                className={classes.radiusTab}
                sx={{ marginTop: "48px" }}
              >
                <Table aria-label="Downloads table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={`${classes.tableHead} `}>
                        Offering Details
                      </TableCell>

                      <TableCell
                        className={`${classes.tableHead} ${classes.tar}`}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <StyledTableCellHead>Purchase Price</StyledTableCellHead>

                      <StyledTableCell align="right">
                        <CurrencyFormat
                          zeroAllowed={false}
                          prefix={"$"}
                          value={offerTableData?.purchasePrice}
                        />
                      </StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCellHead>(-) Debt</StyledTableCellHead>

                      <StyledTableCell align="right">
                        <CurrencyFormat
                          zeroAllowed={false}
                          prefix={"$"}
                          value={offerTableData?.debt}
                        />
                      </StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.profitHead}>
                        Equity
                      </TableCell>

                      <TableCell className={classes.profit}>
                        <CurrencyFormat
                          zeroAllowed={false}
                          prefix={"$"}
                          value={offerTableData?.purchasePrice - offerTableData?.debt}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCellHead>
                        (+) Reserves & Closing Costs
                      </StyledTableCellHead>

                      <StyledTableCell align="right">
                        <CurrencyFormat
                          zeroAllowed={false}
                          prefix={"$"}
                          value={offerTableData?.reservesAndClosing}
                        />
                      </StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCellHead>
                        (+) Invest Tech Buyer Fee
                      </StyledTableCellHead>

                      <StyledTableCell align="right">
                        <CurrencyFormat
                          zeroAllowed={false}
                          prefix={"$"}
                          value={offerTableData?.mogulBuyerFee}
                        />
                      </StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.profitHead}>
                        Total Offering Amount
                      </TableCell>
                      <TableCell className={classes.profit}>
                        <CurrencyFormat
                          zeroAllowed={false}
                          prefix={"$"}
                          value={offerTableData?.totalOfferingAmount}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid container justifyContent="space-between" marginTop="48px">
              <Grid item>
                <MKTypography fontSize="24px" fontWeight="bold">
                  Projected Returns
                </MKTypography>
              </Grid>
            </Grid>
            <Grid container rowSpacing={6} className={classes.mtb30}>
              <>
                <Grid item xs={4} className={classes.slideBox}>
                  <MKTypography fontSize="24px" fontWeight="medium">
                    {invRent}%
                  </MKTypography>
                  <Box display="flex" alignItems="center" gap="12px">
                    <ButtonSum
                      onClick={() => {
                        if (invRent > 0) {
                          setInvRent((old) => Number(old) - 1);
                        }
                      }}
                    >
                      -
                    </ButtonSum>
                    <CustonSlider
                      type="range"
                      min="0"
                      max="100"
                      step={1}
                      value={invRent}
                      onChange={(e) => handleRentSliderChange(e.target.value)}
                    />
                    <ButtonSum
                      onClick={() => {
                        if (invRent < 100) {
                          setInvRent((old) => Number(old) + 1);
                        }
                      }}
                    >
                      +
                    </ButtonSum>
                  </Box>
                  <MKTypography
                    fontSize="16px"
                    className={classes.colorLigthGray}
                  >
                    Annual Rent Growth (%)
                  </MKTypography>
                </Grid>
                <Grid item xs={4} className={classes.slideBox}>
                  <MKTypography fontSize="24px" fontWeight="medium">
                    {invApprication}%
                  </MKTypography>
                  <Box display="flex" alignItems="center" gap="12px">
                    <ButtonSum
                      onClick={() => {
                        if (invApprication > 0) {
                          setInvApprication((old) => Number(old) - 1);
                        }
                      }}
                    >
                      -
                    </ButtonSum>
                    <CustonSlider
                      type="range"
                      min="0"
                      max="100"
                      step={1}
                      value={invApprication}
                      onChange={(e) => handleApprSliderChange(e.target.value)}
                    />
                    <ButtonSum
                      onClick={() => {
                        if (invApprication < 100) {
                          setInvApprication((old) => Number(old) + 1);
                        }
                      }}
                    >
                      +
                    </ButtonSum>
                  </Box>

                  <MKTypography
                    fontSize="16px"
                    className={classes.colorLigthGray}
                  >
                    Annual Appreciation (%)
                  </MKTypography>
                </Grid>
                <Grid item xs={4} className={classes.slideBox}>
                  <MKTypography fontSize="24px" fontWeight="medium">
                    {invToken}%
                  </MKTypography>
                  <Box display="flex" alignItems="center" gap="12px">
                    <ButtonSum
                      onClick={() => {
                        if (invToken > 0) {
                          setInvToken((old) => Number(old) - 1);
                        }
                      }}
                    >
                      -
                    </ButtonSum>
                    <CustonSlider
                      type="range"
                      min="0"
                      max="100"
                      step={1}
                      value={invToken}
                      onChange={(e) => handleTokenSliderChange(e.target.value)}
                    />
                    <ButtonSum
                      onClick={() => {
                        if (invToken < 100) {
                          setInvToken((old) => Number(old) + 1);
                        }
                      }}
                    >
                      +
                    </ButtonSum>
                  </Box>

                  <MKTypography
                    fontSize="16px"
                    className={classes.colorLigthGray}
                  >
                    Tokens (% of Offering)
                  </MKTypography>
                </Grid>
              </>

              <Grid item xs={12}>
                <Box className={classes.chartBox}>
                  {invTableData?.stackBarChartData && (
                    <Bar
                      options={stackBarChartOptions}
                      data={invTableData?.stackBarChartData}
                    />
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} className={classes.mtb30}>
                <TableContainer
                  className={classes.radiusTab}
                  sx={{ marginTop: "48px" }}
                >
                  <Table aria-label="Downloads table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          className={`${classes.tableHead} ${classes.tar}`}
                        ></TableCell>
                        {invTableData?.years?.map((ele, i) => (
                          <TableCell
                            className={`${classes.tableHead} ${classes.tar}`}
                            key={i}
                          >
                            {ele}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <StyledTableCellHead>
                          Investment Appreciation
                        </StyledTableCellHead>
                        {invTableData?.appriciationArr?.map((ele, i) => (
                          <StyledTableCell align="right" key={i}>
                            <CurrencyFormat
                              zeroAllowed={false}
                              prefix={"$"}
                              value={ele}
                            />
                          </StyledTableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <StyledTableCellHead>Cashflow</StyledTableCellHead>
                        {invTableData?.rentGrowthArr?.map((ele, i) => (
                          <StyledTableCell align="right" key={i}>
                            <CurrencyFormat
                              zeroAllowed={false}
                              prefix={"$"}
                              value={ele}
                            />
                          </StyledTableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.profitHead}>
                          Yearly Return
                        </TableCell>
                        {invTableData?.profitArr?.map((ele, i) => (
                          <TableCell className={classes.profit} key={i}>
                            <CurrencyFormat
                              zeroAllowed={false}
                              prefix={"$"}
                              value={ele}
                            />
                          </TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <StyledTableCellHead>
                          Total Gross Profit
                        </StyledTableCellHead>
                        {invTableData?.totalGrossProfitArr?.map((ele, i) => (
                          <StyledTableCell align="right" key={i}>
                            <CurrencyFormat
                              zeroAllowed={false}
                              prefix={"$"}
                              value={ele}
                            />
                          </StyledTableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <StyledTableCellHead>Investment</StyledTableCellHead>
                        {invTableData?.investmentArr?.map((ele, i) => (
                          <StyledTableCell align="right" key={i}>
                            <CurrencyFormat
                              zeroAllowed={false}
                              prefix={"$"}
                              value={ele}
                            />
                          </StyledTableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.profitHead}>
                          Total Holdings
                        </TableCell>
                        {invTableData?.totalHoldings?.map((ele, i) => (
                          <TableCell className={classes.profit} key={i}>
                            <CurrencyFormat
                              zeroAllowed={false}
                              prefix={"$"}
                              value={ele}
                            />
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
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
  );
};

export default InvestmentTab;
