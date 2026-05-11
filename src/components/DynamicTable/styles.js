import { createStyles, makeStyles } from "@mui/styles";

const styles = makeStyles((theme) =>
  createStyles(
    {
      colorBlue: {
        // color: "#2B32B2",
      },
      colorRed: {
        // color: "#FF0000",
      },
      colorEmail: {
        // color: "#1B1C1E",
      },
      visaCard: {
        marginLeft: "8px",
        fontSize: "20px",
        width: "40px",
        height: "25px",
        [theme.breakpoints.down("xs")]: {
          width: "40px",
          height: "25px",
          display: "none",
        },
      },
      visaCard1: {
        width: "35px",
        height: "25px",
        [theme.breakpoints.down("xs")]: {
          width: "40px",
          height: "25px",
          display: "none",
        },
      },
      blueContent: {
        // color: "#FF0000",
        fontSize: "14px",
      },
      accountNumber: {
        // color: "#51566B",
        fontWeight: 400,
        fontSize: "14px",
        marginLeft: "5px",
      },
      blueLinkBalance: {
        // color: "#2D9CDB",
        fontSize: "14px",
        fontWeight: 400,
        cursor: "pointer",
        [theme.breakpoints.down("xs")]: {
          fontSize: "13px",
        },
      },
      moreIcon: {
        cursor: "pointer",
        marginLeft: "10px",
      },
      dFlex: {
        display: "flex",
        justifyContent: "flex-start",
        gap: "10px",
        [theme.breakpoints.down("xs")]: {
          justifyContent: "flex-start",
        },
      },
      ul: {
        "& .MuiPaginationItem-root": {
          color: theme.palette.bodyText.primary,
          fontSize: "14px",
          fontWeight: 600,
        },
      },
      dFlex1: {
        display: "flex",
        justifyContent: "flex-end",
      },
      dFlex2: {
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down("xs")]: {
          justifyContent: "flex-end",
        },
      },
      redButton: {
        // color: "#FF0000",
        fontSize: "14px",
        padding: "0",
        "@media (max-width: 830px)": {
          marginTop: "-10px",
        },
      },
      viewWithEdit: {
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
          justifyContent: "flex-end",
        },
      },
      editText: {
        cursor: "pointer",
      },
      editTextDisabled: {
        cursor: "auto",
        // color: "#2d9cdb96",
      },
      trashIcon: {
        // color: "#D32F2F",
        marginLeft: "8px",
        fontSize: "20px",
        cursor: "pointer",
      },
      trashIcon1: {
        // color: "#D32F2F",
        marginLeft: "18px",
        fontSize: "20px",
      },
      clockIcon: {
        "@media (max-width: 600px)": {
          display: "flex",
          justifyContent: "right",
          flexWrap: "wrap",
        },
        display: "flex",
        flexWrap: "wrap",
      },
      clockText: {
        marginLeft: "8px",
        paddingTop: "3px",
        fontSize: "14px",
      },
      clockContent: {
        marginLeft: "8px",
        fontSize: "14px",
      },
      download: {
        "@media (max-width: 600px)": { justifyContent: "right", pt: 1 },
        fontSize: "14px",
        // color: " #2B32B2",
      },
      downloadIcon: {
        // color: " #2B32B2",
        marginRight: "5px",
      },
      downloadContent: {
        fontSize: "14px",
        // color: theme.palette.callToAction.light,
        lineHeight: "12px",
      },
      tableContainer: {
        borderRadius: "8px",
        border: "none",
        display: "inlineBlock",
        overflowX: "visible !important",
        position: "relative",
        boxShadow: "none",
      },
      tableRow: {
        "&:last-child td, &:last-child th": { border: 0 },
      },
      tBody: {
        paddingRight: "30px",
      },
      tableCell: {
        color: theme.palette.bodyText.primary,
        // borderBottom: "1px solid rgba(224, 224, 224, 0.2)",
        fontSize: "14px",
        fontWeight: "400",
      },
      borderNone: {
        border: "none",
      },
      tableCellStyle: {
        fontSize: "14px",
        color: theme.palette.bodyText.primary,
        // background: "#FAF9FD",
        fontWeight: "600",
        border: 0,
      },
      disabledState: {
        opacity: "0.4",
        cursor: "not-allowed",
      },
    },
    { name: "dynamic-table-component" }
  )
);

export default styles;
