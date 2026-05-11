import { createStyles, makeStyles } from "@mui/styles";

export const historyMock = makeStyles((theme) =>
  createStyles(
    {
      arrowColour: {
        color: theme.palette.callToAction.light,
        marginLeft: "2px",
      },
      arrowDownColour: {
        color: theme.palette.error.main,
      },
      plus: {
        color: theme.palette.callToAction.light,
        marginRight: "6px",
        fontSize: "16px",
      },
      minus: {
        color: theme.palette.error.main,
        marginRight: "6px",
        fontSize: "16px",
      },
      amountMain: {
        fontSize: "14px",
        fontWeight: 700,
        // color: "#51566B",
      },
      amountMainSection: {
        display: "flex",
        alignItems: "center",
        marginLeft: "4px",
        marginTop: "2px",
      },
      alignCenter: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        [theme.breakpoints.down("xs")]: {
          alignItems: "flex-start",
        },
      },
      progressBox: {
        [theme.breakpoints.down("xs")]: {
          marginTop: "15px",
          width: "50%",
          marginLeft: "auto",
        },
      },
      assetImage: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        marginRight: "10px",
        // border: "2px solid #58F2F0",
        padding: "2px",
        [theme.breakpoints.down("xs")]: {
          width: "32px",
          height: "32px",
        },
      },
      assetText: {
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: 400,
        color: theme.palette.callToAction.light,
        textDecoration: "none",
        [theme.breakpoints.down("xs")]: {
          fontWeight: 500,
        },
      },
      assetBox: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        [theme.breakpoints.down("xs")]: {
          marginBottom: "10px",
        },
      },
      mainBal: {
        fontSize: "14px",
      },
      diffVal: {
        fontSize: "13px",
        // color: "#767C97",
        lineHeight: "16px",
        fontWeight: 500,
        display: "flex",
        // marginLeft: "17px",
      },
      arrowTopSection: {
        display: "flex",
        marginTop: "8px",
        justifyContent: "flex-end",
        [theme.breakpoints.down("xs")]: {
          justifyContent: "end",
          marginTop: "0px",
          fontSize: "5px !important",
        },
      },
      txnItem: {
        color: theme.palette.callToAction.light,
        cursor: "pointer",
      },
      textOnlyTooltip: {
        tooltip: {
          // color: "#0F283E",
          // backgroundColor: "transparent",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "5px",
          marginTop: "10px",
          // border: "1px solid #58F2F0",
          padding: "15px 8px",
          // boxShadow: "0px 4px 10px rgba(88, 242, 240, 0.2)",
        },
      },
    },
    { name: "table-sub-component-history" }
  )
);

export const transcationStatus = makeStyles((theme) =>
  createStyles(
    {
      statusComplet: {
        color: theme.palette.success.main,
        fontWeight: 400,
        fontSize: "14px",
      },
      statusPending: {
        color: theme.palette.warning.main,
        fontWeight: 400,
        fontSize: "14px",
      },
      statusFail: {
        color: theme.palette.error.main,
        fontWeight: 400,
        fontSize: "14px",
      },
      statusProgress: {
        color: theme.palette.info.light,
        fontWeight: 400,
        fontSize: "14px",
      },
    },
    { name: "table-sub-component-transaction-status" }
  )
);
