import React from "react";
import { Box, Grid } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

// Static imports
import MKTypography from "components/custom/MKTypography";
import { POLYGONSCAN_URL } from "constants/env";
import { Trending1 } from "constants/assets";
import styles from "./style";

const PropertyDetails = ({ pfAssetData }) => {
  const classes = styles();
  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 300,
    },
  });
  return (
    <>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={7.5}
        xl={7}
        spacing={2}
        className={classes.flexGrid}
      >
        <Box>
          <img
            src={pfAssetData?.property?.mainImage?.url || Trending1}
            className={classes.propertyIcon}
            alt="Property Icon"
          />
        </Box>
        <Box>
          <Box className={classes.flexBaseline}>
            <MKTypography variant="h2" className={classes.heading1}>
              {pfAssetData?.property?.title || "Property Title"}
            </MKTypography>
            <Box className={classes.cityStateLabel}>
              ({pfAssetData?.property?.city}, {pfAssetData?.property?.state})
            </Box>
          </Box>
          <MKTypography component="inline" className={classes.textDesktop}>
            <Tooltip
              enterTouchDelay={0}
              title="Address of the smart contract in charge of producing house tokens on blockchain, read token id definition to learn more."
            >
              <MKTypography component="inline" className={classes.addressVal}>
                Blockchain address{" "}
                <MKTypography
                  component="inline"
                  className={classes.addressVal1}
                >
                  :{" "}
                </MKTypography>
              </MKTypography>
            </Tooltip>
            <a
              rel="noreferrer"
              href={
                POLYGONSCAN_URL +
                "/address/" +
                pfAssetData?.tokenContractAddress
              }
              target="_blank"
              style={{ lineBreak: "break-anywhere" }}
              className={classes.addressValLabelDesktop}
            >
              {pfAssetData?.tokenContractAddress}
            </a>
            <a
              rel="noreferrer"
              href={
                POLYGONSCAN_URL +
                "/address/" +
                pfAssetData?.tokenContractAddress
              }
              target="_blank"
              style={{ lineBreak: "break-anywhere" }}
              className={classes.addressValLabelMobile}
            >
              {pfAssetData?.tokenContractAddress &&
                pfAssetData?.tokenContractAddress?.slice(0, 10) +
                  "......." +
                  pfAssetData?.tokenContractAddress?.substr(-6)}
            </a>
            <MKTypography display="inline" className={classes.sperator}>
              {" "}
              |{" "}
            </MKTypography>
            <CustomWidthTooltip
              enterTouchDelay={0}
              title="Think of this like a ticker of a stock, each stock has a unique ticker to identify in the market. Even though each stock files a regulatory contract S-1 to go public, the ticker delineates between companies. For the token id, this represents your ownership interest in the property with this specific token id that was generated for this specific property."
            >
              <MKTypography component="inline" className={classes.addressVal}>
                {" "}
                Token Id{" "}
                <MKTypography
                  component="inline"
                  className={classes.addressVal1}
                >
                  :{" "}
                </MKTypography>
              </MKTypography>
            </CustomWidthTooltip>
            <a
              rel="noreferrer"
              href={
                POLYGONSCAN_URL +
                "/token/" +
                pfAssetData?.tokenContractAddress +
                "?a=" +
                pfAssetData?.property?.tokenId
              }
              target="_blank"
              className={classes.addressValLabel}
            >
              {pfAssetData?.property?.tokenId}
            </a>
          </MKTypography>
        </Box>
      </Grid>
      <Box className={classes.textMobile} pl={3}>
        <MKTypography>
          <Tooltip
            enterTouchDelay={0}
            title="Address of the smart contract in charge of producing house tokens on blockchain, read token id definition to learn more."
          >
            <MKTypography component="inline" className={classes.addressVal}>
              Blockchain address{" "}
              <MKTypography component="inline" className={classes.addressVal1}>
                :{" "}
              </MKTypography>
              <MKTypography component="inline" className={classes.addressVal1}>
                <a
                  rel="noreferrer"
                  href={
                    POLYGONSCAN_URL +
                    "/address/" +
                    pfAssetData?.tokenContractAddress
                  }
                  target="_blank"
                  // style={{ lineBreak: "break-anywhere" }}
                  className={classes.addressValLabelMobile1}
                >
                  {pfAssetData?.tokenContractAddress &&
                    pfAssetData?.tokenContractAddress?.slice(0, 10) +
                      "......." +
                      pfAssetData?.tokenContractAddress?.substr(-6)}
                </a>
              </MKTypography>
            </MKTypography>
          </Tooltip>
          {/* <br /> */}
        </MKTypography>
        <MKTypography variant="h2" mt={-2}>
          <CustomWidthTooltip
            enterTouchDelay={0}
            title="Think of this like a ticker of a stock, each stock has a unique ticker to identify in the market. Even though each stock files a regulatory contract S-1 to go public, the ticker delineates between companies. For the token id, this represents your ownership interest in the property with this specific token id that was generated for this specific property."
          >
            <MKTypography component="inline" className={classes.addressVal}>
              {" "}
              Token Id{" "}
              <MKTypography component="inline" className={classes.addressVal1}>
                :{" "}
              </MKTypography>
            </MKTypography>
          </CustomWidthTooltip>
          <a
            rel="noreferrer"
            href={
              POLYGONSCAN_URL +
              "/token/" +
              pfAssetData?.tokenContractAddress +
              "?a=" +
              pfAssetData?.property?.tokenId
            }
            target="_blank"
            className={classes.addressValLabel}
          >
            {pfAssetData?.property?.tokenId}
          </a>
        </MKTypography>
      </Box>
    </>
  );
};

export default PropertyDetails;
