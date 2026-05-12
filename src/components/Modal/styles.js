import { createStyles, makeStyles } from "@mui/styles";

const styles = makeStyles((theme) =>
  createStyles(
    {
      mainDialog: {
        color: theme.palette.bodyText.primary,
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "500px", // Set your width here
            minHeight: "250px",
            padding: "20px 0px",
          },
        },
      },
      specs1: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: "6px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        minHeight: "18px",
      },
      tagsEle: {
        color: "#1A2B4A",
        fontSize: "10px",
        textTransform: "uppercase",
        background: "rgba(201,168,76,0.18)",
        border: "1px solid rgba(201,168,76,0.35)",
        padding: "2px 8px",
        fontWeight: "700",
        letterSpacing: "0.04em",
        borderRadius: "20px",
        margin: "0 auto",
      },
      mainDialogAdd: {
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "500px", // Set your width here
            minHeight: "250px",
            padding: "20px 0px",
          },
        },
      },
      mainDialog2: {
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "526px", // Set your width here
            borderRadius: "4px",
            height: "300px",
          },
        },
      },
      viwerDialog: {
        // background: "transparent !important",
      },
      depositImg: {
        minHeight: "10px",
        minWidth: "10px",
        maxHeight: "14px",
        maxWidth: "14px",
        width: "auto",
        height: "auto",
        marginRight: "10px",
      },
      depositImg1: {
        minHeight: "10px",
        minWidth: "10px",
        maxHeight: "20px",
        maxWidth: "35px",
        width: "auto",
        height: "auto",
        marginTop: "5px",
        marginRight: "10px",
      },
      depositImg2: {
        minHeight: "10px",
        minWidth: "10px",
        maxHeight: "40px",
        maxWidth: "30px",
        width: "auto",
        height: "auto",
        marginRight: "10px",
      },
      tar: {
        textAlign: "right",
      },
      textDangor: {
        // color: "#ed193b",
      },
      textPrimary: {
        // color: "#2D9CDB",
      },
      dilogTitle3: {
        padding: "0px",
      },
      coBox: {
        padding: "15px",
        borderRadius: "24px",
        // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      depositModalSuccessBtn: {
        width: "220px",
      },
      closeIconContainer: {
        display: "flex",
        justifyContent: "right",
        top: 30,
        left: 30,
        height: "20px",
        alginItems: "center",
        marginTop: "10px",
      },
      closeIconContainer1: {
        display: "flex",
        justifyContent: "right",
        top: 30,
        left: 30,
        height: "0px",
        alginItems: "center",
        marginTop: "10px",
      },
      closeIconRight: {
        position: "absolute",
        top: "12px",
        right: "12px",
        zIndex: 5,
        background: "rgba(255,255,255,0.9) !important",
        backdropFilter: "blur(8px)",
        width: "28px !important",
        height: "28px !important",
        borderRadius: "50% !important",
        "&:hover": {
          background: "#FFFFFF !important",
        },
      },
      subHeader1: {
        // color: "#1b1c1edb",
        //color: theme.palette.bodyText.primary,
        marginTop: "14px",
        fontWeight: "400",
        textAlign: "center",
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
      },
      dialogContent: {
        alginItems: "center",
        fontWight: "400",
        // color: "#4F4F4F",
        color: theme.palette.bodyText.primary,
        padding: "0px !important",
        width: "92%",
        margin: "auto",
        textAlign: "center",
        paddingBottom: "0px",
        "@media (max-width:600px)": {
          width: "90%",
          padding: "0px 20px",
        },
      },
      dialogInvestContent: {
        alginItems: "center",
        fontWight: "400",
        color: theme.palette.bodyText.primary,
        padding: "0px !important",
        textAlign: "center",
        paddingBottom: "0px",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
      dialogContent1: {
        alginItems: "center",
        fontWight: "400",
        //color: theme.palette.bodyText.primary,
        width: "95%",
        textAlign: "center",
        margin: "-20px auto",
        padding: "0px !important",
        "@media (max-width:600px)": {
          width: "95%",
          padding: "0px 5px",
        },
      },
      dialogContentCheckout: {
        alginItems: "center",
        fontWight: "400",
        color: theme.palette.bodyText.primary,
        width: "100%",
        textAlign: "center",
        padding: "0px !important",
        "@media (max-width:600px)": {
          width: "100%",
          padding: "0px 5px",
        },
      },
      dialogContentConsent: {
        alginItems: "center",
        fontWight: "400",
        //color: theme.palette.bodyText.primary,
        width: "90%",
        margin: "auto",
        paddingBottom: "0px",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "@media (max-width:600px)": {
          width: "95%",
          padding: "0px 5px",
        },
      },

      navigateLogin: {
        width: "350px !important",
      },
      modalBottomButton: {
        display: "flex",
        width: "75%",
        margin: "auto",
        justifyContent: "space-evenly",
        paddingBottom: "30px",
      },
      modalBottomButton1: {
        display: "flex",
        width: "75%",
        margin: "auto",
        justifyContent: "space-evenly",
        paddingBottom: "30px",
        marginTop: "20px",
        marginBottom: "0px",
      },
      modalBottomButtonConsent: {
        display: "flex",
        marginTop: "50px",
        width: "100%",
        margin: "auto",
        justifyContent: "space-evenly",
        paddingBottom: "30px",
      },
      checkoutContainer: {
        padding: "0px 20px",
        "@media (max-width:600px)": {
          padding: "0px 0px",
        },
      },
      checkoutLockIcon: {
        position: "absolute",
        top: 0,
        right: "100%",
        height: "23px",
        width: "23px",
        paddingTop: "4px",
        marginRight: "11px",
        marginTop: "7px",
        opacity: "0.92",
      },
      titleBox: {
        textAlign: "center",
      },
      mainTitle2: {
        fontSize: "20px",
        fontWeight: "500",
        marginTop: "10px",
        padding: "0px",
        "@media (max-width:650px)": {
          fontSize: "16px",
          fontWeight: "500",
        },
      },
      mainTitle: {
        display: "inline-block",
        position: "relative",
        fontSize: "30px",
        fontWeight: "700",
        width: "240px",
        margin: "auto",
        "@media (max-width:600px)": {
          fontSize: "25px",
          fontWeight: "700",
        },
        "@media (max-width:375px)": {
          fontSize: "25px",
          fontWeight: "700",
        },
      },
      mainTitleTagline: {
        fontSize: "16px",
        fontWeight: "500",
        // color: "#51566B",
        //color: theme.palette.bodyText.primary,
        marginTop: "20px",
        marginBottom: "30px",
        display: "flex",
        alignContent: "center",
      },
      subTitle: {
        color: "text",
        // textColor: "grey",
        textAlign: "center",
        "@media (max-width:600px)": {
          fontSize: "14px",
        },
      },
      sectionTerms: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        "@media (max-width:600px)": {
          fontSize: "12px ",
        },
      },
      checkBox: {
        marginRight: 1,
        alignItems: "flex-start",
        height: "100%",
      },
      termsText: {
        cursor: "pointer",
        // color: "#2D355A",
        fontSize: "13px",
        textAlign: "left",
        display: "block",
      },
      link1: {
        textDecoration: "none",
        // color: "#1b8fd3",
        fontSize: "16px",
        fontWeight: "600",
      },
      subTitleSso: {
        color: "text",
        // textColor: "grey",
        textAlign: "center",
        width: "90%",
        marginBottom: "10px",
        fontSize: "18px !important",
        "@media (max-width:600px)": {
          fontSize: "16px !important",
          lineHeight: "24px",
        },
      },
      modalTitle: {
        width: "500px",
        fontWeight: "600",
        fontSize: "20px",
        lineHight: "24px",
        textAlign: "center",
        "@media (max-width:600px)": {
          fontSize: "20px",
          fontWeight: "600",
        },
      },
      modalTitleMargin: {
        color: theme.palette.bodyText.primary,
        width: "500px",
        fontWeight: "600",
        fontSize: "20px",
        lineHight: "24px",
        textAlign: "center",
        margin: "50px 0px 30px",
        "@media (max-width:600px)": {
          fontSize: "20px",
          fontWeight: "600",
        },
      },
      modalTitle1: {
        width: "500px",
        fontWeight: "600",
        margin: "10px 0px",
        fontSize: "20px",
        lineHight: "24px",
        textAlign: "center",
        marginBottom: "20px",
        "@media (max-width:600px)": {
          fontSize: "20px",
          fontWeight: "600",
        },
      },
      modalTitle1Consent: {
        width: "500px",
        fontWeight: "700",
        margin: "10px 0px",
        // color: "#1B1C1E",
        fontSize: "30px",
        lineHight: "24px",
        textAlign: "center",
        "@media (max-width:600px)": {
          fontSize: "20px",
          fontWeight: "600",
        },
      },
      mkButton1: {
        width: "141px",
        // color: "#040407",
        "@media (max-width:600px)": {
          width: "120px",
        },
      },
      mkButton1Consent: {
        width: "40%",
        // color: "#040407",
        "@media (max-width:600px)": {
          width: "120px",
        },
      },
      mkButton: {
        marginRight: "50px",
        width: "25%",
        // color: "#040407",
        "@media (max-width:600px)": {
          width: "100%",
          margin: " 0px 20px",
        },
      },
      dialogTitle1: {
        padding: "0px",
        "@media (max-width:600px)": {
          width: "90%",
          margin: "auto",
        },
      },
      dialogTitle: {
        padding: "0px",
      },
      dialogTitle2: {
        padding: "0px",
        textAlign: "center",
        width: "100%",
      },
      modalButton: {
        paddingBottom: "50px",
        alignItems: "center",
      },
      noPaymentM: {
        height: "100px",
        marginTop: "20px",
        width: "100px",
      },
      noContentBox: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      noContentText: {
        fontSize: "22px",
        textTransform: "uppercase",
        width: "100%",
        fontWeight: 700,
        "@media (max-width:600px)": {
          fontSize: "20px",
          fontWeight: "600",
        },
        // color: "#613ED2",
      },
      noContentText1: {
        fontSize: "16px",
        fontWeight: 400,
        // color: "red",
        marginBottom: "50px",
      },
      mainDialog3: {
        "& .MuiDialogContent-root": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            padding: "20px 0px",
            maxWidth: "528px", // Set your width here
            borderRadius: "4px",
          },
        },
      },
      mainDialogCheckout: {
        "& .MuiDialogContent-root": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxHeight: "95vh !important",
            padding: "20px 0px 0px",
            maxWidth: "500px", // Set your width here
            borderRadius: "4px",
          },
        },
      },
      mainDialog4: {
        "& .MuiDialogContent-root": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            padding: "20px 0px",
            maxWidth: "700px", // Set your width here
            borderRadius: "4px",
          },
        },
      },
      subtitle: {
        // color: "#4F4F4F",
        fontSize: "16px",
        fontWeight: 400,
      },
      subtitleHead: {
        // color: "#2D355A",
        fontSize: "14px",
        fontWeight: 400,
        textAlign: "left",
        marginBottom: "30px",
      },
      subtitleHeadId: {
        // color: "#2D355A",
        fontSize: "14px",
        fontWeight: 400,
        textAlign: "left",
        marginBottom: "30px",
        padding: "0px 20px",
      },
      idVerification: {
        width: "180px",
        height: "130px",
        marginBottom: "40px",
      },
      borderBottomLight: {
        borderBottom: "1px solid #EEEEEE",
        paddingBottom: "5px",
      },
      pColor: {
        // color: "#0D99FF",
        fontSize: "28px",
        fontWeight: 600,
        marginTop: "10px",
      },
      button50Width: {
        width: "50%",
      },
      subtitle1: {
        // color: "#303030",
        fontSize: "24px",
        fontWeight: 500,
        "@media (max-width:600px)": {
          fontSize: "13px",
          fontWeight: "400",
        },
      },
      subtitlePhone: {
        marginTop: "-10px",
        fontSize: "30px",
        fontWeight: "700",
        marginBottom: "20px",
      },
      link: {
        textAlign: "center",
        cursor: "pointer",
        fontWeight: "400",
        fontSize: "14px",
        // color: "#2D9CDB",
      },
      buttonContainer: {
        paddingBottom: "15px",
        alignItems: "center",
      },
      buttonContainer1: {
        margin: "25px 0px 0px 0px",
        alignItems: "center",
      },
      width220: {
        width: "220px",
      },
      checkedCircleStyle1: { height: 80, width: 80 },
      checkedCircleStyle: { height: 125, width: 125 },
      checkedCircleStyle3: {
        height: 200,
        width: 200,
        marginTop: "0px",
        alignContent: "center",
      },
      copyStyle: { height: 24, width: 24 },
      dividerText: {
        // color: "#1B1C1E",
        fontSize: "14px",
        marginTop: "-8px",
      },
      copyContainer: {
        width: "auto",
        height: "45px",
        padding: "0px 20px",
        color: theme.palette.bodyText.primary,
        borderRadius: "4px",
        background: theme.palette.grey[50],
        margin: "20px auto 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      },
      copyText: {
        // color: "#4F4F4F",
        fontSize: "14px",
        marginRight: "10px",
      },
      depositModalTitle: {
        width: "auto",
        fontWeight: "700",
        fontSize: "30px",
        lineHeight: "35px",
        margin: "20px 0px",
        minWidth: "350px",
        "@media (max-width:600px)": {
          fontSize: "24px",
          margin: "15px 0px",
          minWidth: "0px",
        },
      },
      tBox: {
        height: "42px",
        flex: 1,
        borderColor: "#E2E8F0",
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "all 160ms ease",
        background: "#FFFFFF",
        "&:hover": {
          borderColor: "#1A2B4A",
          background: "rgba(26,43,74,0.04)",
          transform: "translateY(-1px)",
        },
      },
      noContentBox1: {
        marginTop: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      tokenVal: {
        color: "#1A1A2E",
        fontSize: "14px",
        fontWeight: "600",
        userSelect: "none",
      },
      tBoxContainer: {
        margin: "10px 0px 14px",
        display: "flex",
        gap: "10px",
        alignItems: "flex-end",
        width: "100%",
      },
      mostPopular: {
        // color: "#d08700",
        fontSize: "15px",
        fontWeight: "700",
        textAlign: "center",
        marginRight: "20px",
        // marginLeft: "20px",
        marginBottom: "3px",
        "@media (max-width:600px)": {
          fontSize: "13px",
        },
        "@media (max-width:3500px)": {
          fontSize: "12px",
        },
      },
      profileSubtitle: {
        width: "90%",
        textAlign: "center",
        marginTop: "-10px",
        marginBottom: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "14px",
        lineHeight: "18px",
        fontWeight: "500",
        // color: "#939090",
      },
      depositModalSubTitle: {
        width: "90%",
        fontWeight: "450",
        fontSize: "14px",
        lineHeight: "23px",
        margin: "-10px auto 10px",
        // color: "#4F4F4F",
        // borderBottom: "2px dotted #bab0b0",
        "@media (max-width:600px)": {
          fontSize: "15px",
          margin: "0px auto",
          marginTop: "-10px",
        },
      },
      mkBox: {
        zIndex: 1,
      },
      imageContainer: {
        position: "relative",
        height: "180px",
        width: "100%",
        borderRadius: "0",
        background: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
      },
      image: {
        height: "100%",
        width: "100%",
        borderRadius: "0",
        objectFit: "cover",
      },
      depositModalSubTitle1: {
        width: "fit-content",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "23px",
        margin: "-10px auto 10px",
        "@media (max-width:600px)": {
          fontSize: "15px",
          margin: "0px auto",
          marginTop: "-10px",
        },
      },
      customTooltip: {
        // background: "black",
        fontSize: "12px",
      },
      customArrow: {
        // color: "black",
      },
      depositSubititle1: {
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "28px",
        margin: "auto",
        // color: "#2D355A",
        marginTop: "10px",
        "@media (max-width:600px)": {
          marginTop: "15px",
        },
      },
      depositSelect: {
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "18.75px",
        marginRight: "auto",
      },
      depositSelectBox: {
        flexDirection: "column",
      },
      depositSelectBox2: {
        paddingTop: "25px",
        marginTop: "25px",
        flexDirection: "column",
      },
      depositSelectBox3: {
        flexDirection: "column",
      },
      depositModalSelect: {
        // color: "##1B1C1E",
      },
      depositRadioGroup: {
        marginRight: "auto",
      },
      depositModalRadioInput: {
        display: "flex",
        flexDirection: "row-reverse",
        width: "32vw",
        justifyContent: "space-between",
        // border: "0.5px solid #c9c3c3",
        borderWidth: "thin",
        borderRadius: "5px",
        margin: "10px 0px",
        "@media (max-width:800px)": {
          width: "60vw",
        },
        "@media (max-width:700px)": {
          width: "65vw",
        },
        "@media (max-width:425px)": {
          width: "70vw",
        },
      },
      depoitContinueBtn2: {
        width: "100%",
        background: "#1A2B4A !important",
        color: "#FFFFFF !important",
        border: "none",
        marginBottom: "0",
        marginTop: "8px",
        height: "44px",
        borderRadius: "10px !important",
        textTransform: "none !important",
        fontSize: "14px !important",
        fontWeight: "600 !important",
        letterSpacing: "0.01em",
        boxShadow: "none !important",
        transition: "all 160ms ease",
        "&:hover": {
          background: "#2C4270 !important",
          transform: "translateY(-1px)",
          boxShadow: "0 4px 14px rgba(26,43,74,0.22) !important",
        },
        "&.Mui-disabled, &:disabled": {
          background: "#E2E8F0 !important",
          color: "#94A3B8 !important",
        },
      },
      depoitContinueBtn2MarginPadding: {
        marginBottom: "4px",
      },
      paymentAuthDisclaimer: {
        fontSize: "9px",
        width: "100%",
        marginBottom: "20px",
        fontStyle: "italic",
        color: theme.palette.bodyText.disclaimers,
      },
      emailVerify: {
        height: "150px",
        width: "167px",
      },
      depoitContinueBtn: {
        width: "50%",
        // background: "#58F2F0",
        // color: "#040407",
        border: "none",
        marginBottom: "10px",
        marginTop: "0px",
        // "&:hover": {
        //   background: "#58F2F0",
        // },
        "@media (max-width:600px)": {
          marginBottom: "25px",
          marginTop: "0px",
        },
      },
      flexBox1: {
        display: "flex !important",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "-30px",
      },
      phoneNumberBox: {
        position: "absolute",
        top: 0,
        right: 0,
        height: "44px",
        display: "flex",
        alignItems: "center",
      },
      phoneText: {
        userSelect: "none",
        height: "44px",
        display: "flex !important",
        alignItems: "center",
        fontSize: "13px",
        fontWeight: 600,
        // color: "#4CAF50",
      },
      checkIcon: {
        width: "20px",
        height: "20px",
        marginRight: "4px",
        // [theme.breakpoints.down(426)]: {
        //   marginRight: "-7px",
        // },
        // [theme.breakpoints.down(321)]: {
        //   width: "17px",
        //   height: "17px",
        // },
      },
      verifiedText: {
        fontSize: "13px",
        fontWeight: 600,
        "@media (max-width:453px)": {
          display: "none",
        },
      },
      verifyBtn: {
        padding: "0px 25px",
        height: "44px",
        border: "none",
        // background: `#58F2F0 !important`,
        borderTopRightRadius: "5px !important",
        borderBottomRightRadius: "5px !important",
        borderTopLeftRadius: "0px !important",
        borderBottomLeftRadius: "0px !important",
        fontSize: "14px",
        fontWeight: 400,
        // color: "#040407 !important",
        // "@media (max-width:426px)": {
        //   width: "20px",
        // },
      },
      depoitContinueBtnRef: {
        width: "50%",
        // background: "#58F2F0",
        // color: "#040407",
        border: "none",
        marginBottom: "10px",
        marginTop: "0px",
        // "&:hover": {
        //   background: "#58F2F0",
        // },
        "@media (max-width:600px)": {
          marginBottom: "25px",
          marginTop: "0px",
          width: "100%",
        },
      },
      depoitContinueBtn1: {
        width: "50%",
        // background: "#58F2F0",
        // color: "#040407",
        border: "none",
        marginBottom: "30px",
        borderRadius: "40px",
      },
      depoitContinueBtnNew: {
        width: "50%",
        // background: "#58F2F0",
        // color: "#040407",
        border: "none",
        marginBottom: "50px",
        borderRadius: "40px",
      },
      selectedOption: {
        // border: "0.5px solid #58F2F0",
        borderWidth: "thin",
        borderRadius: "5px",
      },
      selectBoxMainContainer: {
        margin: "15px 0px 20px",
      },
      selectBoxContainer1: {
        height: "83px",
        width: "100%",
        // border: "1px solid #EEEEEE",
        borderRadius: "4px",
        marginBottom: "10px",
        cursor: "pointer",
        padding: "0px 15px",
        display: "flex",
        "@media (max-width:425px)": {
          // height: "52px",
        },
      },
      selectBoxContainer1New: {
        height: "83px",
        width: "100%",
        // border: "1px solid #EEEEEE",
        borderRadius: "4px",
        marginBottom: "10px",
        cursor: "pointer",
        padding: "0px 15px",
        display: "flex",
        justifyContent: "center",
        "@media (max-width:425px)": {},
      },
      addPay: {
        fontSize: "14px",
        marginLeft: "10px",
        cursor: "pointer",
      },
      selectBoxContainer50: {
        height: "50px",
        width: "100%",
        // border: "1px solid #EEEEEE",
        borderRadius: "4px",
        marginBottom: "10px",
        cursor: "pointer",
        padding: "0px 15px",
        display: "flex",
        justifyContent: "center",
        "@media (max-width:425px)": {},
      },
      selectBoxContainer2: {
        height: "80px",
        width: "100%",
        // border: "1px solid #EEEEEE",
        borderRadius: "4px",
        marginBottom: "10px",
        cursor: "pointer",
        padding: "0px 15px",
        display: "flex",
        alignItems: "center",
      },
      selectBoxContainer: {
        height: "60px",
        width: "100%",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: theme.palette.inputs.border.primary,
        borderRadius: "4px",
        marginBottom: "10px",
        cursor: "pointer",
        padding: "0px 15px",
        display: "flex",
        alignItems: "center",
        "@media (max-width:425px)": {
          height: "52px",
        },
      },
      disabledBoxContainer: {
        height: "65px",
        width: "100%",
        // border: "1px solid #EEEEEE",
        borderRadius: "4px",
        marginBottom: "10px",
        // cursor: "pointer",
        padding: "0px 15px",
        display: "flex",
        alignItems: "center",
      },
      selectBoxContainerSelected: {
        height: "60px",
        width: "100%",
        borderRadius: "4px",
        marginBottom: "10px",
        cursor: "pointer",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: theme.palette.success.main,
        padding: "0px 15px",
        display: "flex",
        justifyContent: "space-between",
        "@media (max-width:425px)": {
          height: "52px",
        },
      },
      loadText: {
        // fontWeight: 400,
      },
      selectBoxContainerSelected1: {
        height: "83px",
        width: "100%",
        borderRadius: "4px",
        marginBottom: "10px",
        cursor: "pointer",
        // border: "1px solid #58F2F0",
        padding: "0px 15px",
        display: "flex",
        alignItems: "flex-start",
        "@media (max-width:425px)": {
          // height: "52px",
        },
      },
      selectBoxContainerSelectedNew: {
        height: "83px",
        width: "100%",
        borderRadius: "4px",
        marginBottom: "10px",
        cursor: "pointer",
        // border: "1px solid #58F2F0",
        padding: "0px 15px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        "@media (max-width:425px)": {
          // height: "52px",
        },
      },
      selectBoxContainerSelected50: {
        height: "50px",
        width: "100%",
        borderRadius: "4px",
        marginBottom: "10px",
        cursor: "pointer",
        // border: "1px solid #58F2F0",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: theme.palette.success.light,
        padding: "0px 15px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        "@media (max-width:425px)": {
          // height: "52px",
        },
      },
      selectBoxContainerSelected2: {
        height: "80px",
        width: "100%",
        borderRadius: "4px",
        marginBottom: "10px",
        cursor: "pointer",
        // border: "1px solid #58F2F0",
        padding: "0px 15px",
        display: "flex",
        justifyContent: "space-between",
        "@media (max-width:425px)": {
          // height: "52px",
        },
      },
      listBox: {
        padding: "16px 12px",
        margin: "0 40px",
        // background: "#FFF3F4",
        fontSize: "14px",
        fontWeight: 400,
        // color: "#0E111D",
      },
      checkedIcon: {
        height: "20px",
        width: "20px",
        color: theme.palette.success.main,
      },
      currentBalance: {
        fontSize: "13px",
        fontWeight: 400,
        // color: "#4F4F4F",
      },
      imgContainer: {
        marginTop: "40px",
      },
      subtitleConsent: {
        // color: "#303030",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "130%",
        marginTop: "15px",
        "@media (max-width:600px)": {
          fontSize: "13px",
          fontWeight: "400",
        },
      },
      backButton: {
        // margin: "10px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: 300,
      },
      backButton2: {
        position: "absolute",
        top: "10px",
        left: "10px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: 300,
        // color: "black",
        // background: "white",
        padding: "2px 6px",
        borderRadius: "8px",
      },
      backButton1: {
        // margin: "10px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: 300,
        marginLeft: "10px",
      },
      pContainer: {
        padding: "0px 20px !important",
      },
      detailsInnerBox: {
        maxWidth: 880,
        width: "100%",
        margin: "42px auto",
        "@media (max-width:600px)": {
          margin: "30px auto 0px",
        },
      },
      stepperBox: {
        // height: "30px",
        padding: "10px 0px",
        overflowX: "scroll",
        "@media (max-width:600px)": {
          paddingLeft: "10px",
          margin: "0px 20px",
        },
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
      closeIcon1: {
        "& .MuiSvgIcon-root": {
          height: "20px",
          width: "20px",
        },
      },
      errorConsent: {
        // color: "#F95C66",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "130%",
        marginTop: "15px",
        textAlign: "center",
        marginBottom: "30px",
        "@media (max-width:600px)": {
          fontSize: "13px",
          fontWeight: "400",
        },
      },
      subtitleConsent1: {
        marginTop: "15px",
        // color: "#303030",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "130%",
        "@media (max-width:600px)": {
          fontSize: "13px",
          fontWeight: "400",
        },
      },
      subtitleConsent2: {
        marginTop: "15px",
        // color: "#2D9CDB",
        fontSize: "14px",
        marginLeft: "4px",
        fontWeight: 400,
        lineHeight: "130%",
        cursor: "pointer",
        "@media (max-width:600px)": {
          fontSize: "13px",
          fontWeight: "400",
        },
      },
      dialogConsent: {
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            padding: "40px 0px",
            width: "100%",
            maxWidth: "700px", // Set your width here
            borderRadius: "4px",
          },
        },
      },
      dialogConsentBase: {
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            padding: "40px 0px",
            width: "100%",
            maxWidth: "500px", // Set your width here
            borderRadius: "4px",
          },
        },
      },
      dialogConsent1: {
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            padding: "20px 0px 40px",
            width: "100%",
            maxWidth: "700px", // Set your width here
            borderRadius: "4px",
          },
        },
      },
      dialogPayout: {
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            padding: "40px 0px",
            width: "100%",
            maxWidth: "500px", // Set your width here
            borderRadius: "4px",
          },
        },
      },
      dFlex: {
        display: "flex",
        justifyContent: "space-between",
        // borderBottom: "1px solid #EEEEEE",
        padding: "7px 0px",
      },
      dFlexBase: {
        display: "flex",
        justifyContent: "space-between",
        padding: "7px 0px",
      },
      keyConsent: {
        // color: "#303030",
        fontWeight: 400,
        fontSize: "14px",
        "@media (max-width:420px)": {
          fontSize: "13px",
        },
      },
      pairConsent: {
        // color: "#303030",
        fontWeight: 500,
        fontSize: "14px",
        "@media (max-width:420px)": {
          fontSize: "13px",
          textAlign: "right",
        },
      },
      keyConsentBold: {
        // color: "#303030",
        fontWeight: 700,
        fontSize: "14px",
      },
      docName: {
        display: "flex",
        alignItems: "center",
        gap: "5px",
      },
      labelColor: {
        // background: "#FAF9FD",
      },
      whiteLabelColor: {
        // background: "#fff",
      },
      labelColor1: {
        paddingRight: "0px !important",
      },
      uploadBtn: {
        // background: "#F5F5F5",
        // color: "#040407",
        fontSize: "14px",
        fontWeight: 500,
        borderRadius: 0,
        // marginLeft: "50px",
      },
      pairConsentBold: {
        // color: "#303030",
        fontWeight: 700,
        fontSize: "14px",
      },
      BankAccountDetailsDialog: {
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "750px", // Set your width here
            borderRadius: "4px",
          },
        },
      },
      dialog: {
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            borderRadius: "16px",
            padding: "0px 0px",
            maxWidth: "500px", // Set your width here
            width: "500px", // Set your width here
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        },
      },
      investDialog: {
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            borderRadius: "16px",
            padding: "0px 0px",
            maxWidth: "460px",
            width: "460px",
            boxShadow: "0 24px 48px rgba(26,43,74,0.18)",
            overflow: "hidden",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        },
      },
      referralDialog: {
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            borderRadius: "16px",
            padding: "40px",
            maxWidth: "600px", // Set your width here
            width: "600px", // Set your width here
          },
        },
      },
      investContent: {
        padding: "22px 28px 24px",
        "@media (max-width:600px)": {
          padding: "20px 20px 24px",
        },
      },
      topSection: {
        textAlign: "left",
        marginBottom: "16px",
        paddingBottom: "16px",
        borderBottom: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
        gap: "2px",
      },
      centerGrid: {
        marginTop: "0px",
        gap: "10px",
        display: "flex",
        flexDirection: "column",
      },
      dFlex1: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      },
      cardfooterLabel: {
        color: "#6B7280",
        fontSize: "13px",
        fontWeight: "500",
        letterSpacing: "0",
        borderBottom: "none",
        marginBottom: "0",
      },
      cardfooterValue: {
        fontSize: "15px",
        fontWeight: "700",
        color: "#1A1A2E",
        fontFamily: '"PP Fragment-Sans", sans-serif',
      },
      locationEle: {
        fontSize: "12px",
        fontWeight: "600",
        marginLeft: "0",
        marginTop: "2px",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "#6B7280",
      },
      bankDetailsBox: {
        paddingBottom: "50px",
      },
      BankAccountDetailsLabel: {
        fontWeight: "700",
        fontSize: "16px",
        display: "flex",
        // color: "black",
      },
      BankAccountDetailsLabel1: {
        fontWeight: "700",
        fontSize: "16px",
        display: "flex",
        // color: "black",
        marginTop: "30px",
      },
      DetailsContainer: {
        textAlign: "start",
        marginBottom: "20px",
        marginTop: "5px",
        // borderTop: "1px solid #F5F5F5",
        paddingTop: "10px",
        whiteSpace: "pre",
      },
      DetailsLab: {
        fontWeight: "400",
        fontSize: "14px",
        // color: " #4F4F4F",
        "@media (max-width:600px)": {
          fontSize: "13px",
        },
      },
      DetailsAns: {
        fontWeight: "700",
        fontSize: "14px",
        // color: "#51566B",
        whiteSpace: "pre-line !important",
        lineHeight: "18px",
        maxWidth: "150px",
        "@media (max-width:600px)": {
          fontSize: "13px",
        },
      },
      PIamountLabel: {
        textAlign: "left",
        fontSize: "13px",
        fontWeight: "600",
        color: "#374151",
        marginBottom: "8px",
      },
      PIblncLabel: {
        textAlign: "left",
        margin: "10px 0px",
        fontStyle: "italic",
        color: theme.palette.bodyText.subText,
      },
      PIdisclaimerIcon: {
        margin: "-8px -4px",
      },
      GMBox: {
        height: "60vh",
        width: "100%",
        marginBottom: "20px",
      },
      selectMethod: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "10px",
      },
      selectMethodOption: {
        display: "flex",
        alignItems: "center",
        marginLeft: "10px",
      },
      walletAvaLmt: {
        // color: "#51566B",
        fontSize: "13px",
        fontWeight: "400",
        fontStyle: "italic",
        marginTop: "10px",
      },
      walletAvaLmt2: {
        // color: "#2D355A",
        fontSize: "13px",
        fontWeight: "600",
        // textDecoration:"underline dashed #51566B"
      },
      selectMethod2: {
        display: "flex",
        whiteSpace: "pre",
        marginTop: "-10px",
      },
      mainIconContainer: {
        marginTop: "0px",
        width: "100%",
        paddingLeft: "10px",
      },
      iconContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        borderRadius: "50%",
      },
      methodName: {
        marginRight: "auto",
        marginTop: "20px",
        marginBottom: "5px",
        fontSize: "14px",
        fontWeight: "600",
        width: "100%",
        textAlign: "left",
        "@media (max-width:600px)": {
          fontSize: "14px",
          fontWeight: "500",
        },
      },
      methodSubtitle: {
        marginRight: "auto",
        marginBottom: "0px",
        marginTop: "2px",
        fontSize: "13px",
        fontWeight: "600",
        // color: "#4F4F4F",
        "@media (max-width:600px)": {
          fontSize: "13px",
          fontWeight: "500",
        },
      },
      methodTagline: {
        marginBottom: "5px",
        fontSize: "13px",
        fontWeight: "400",
        lineHeight: "18px",
        marginTop: "5px",
        // color: "#939090",
        textAlign: "left",
        "@media (max-width:600px)": {
          fontSize: "13px",
          fontWeight: "400",
        },
      },
      methodTagline1: {
        marginBottom: "5px",
        fontSize: "15px",
        fontWeight: "600",
        lineHeight: "18px",
        marginTop: "5px",
        // color: "#2D355A",
        textAlign: "left",
        "@media (max-width:600px)": {
          fontSize: "14px",
          fontWeight: "600",
        },
      },
      dTitle1: {
        // color: "#2D355A",
        fontSize: "14px",
        fontWeight: "700",
        marginTop: "20px",
      },
      dTitle2: {
        // color: "#2D355A",
        fontSize: "14px",
        fontWeight: "400",
        marginTop: "10px",
        marginBottom: "10px",
      },
      dTitle3: {
        // color: "#2D355A",
        fontSize: "14px",
        fontWeight: "700",
        marginBottom: "15px",
      },
      knowMoreLink: {
        // color: "#2D9CDB",
        fontSize: "13px",
        fontWeight: "500",
        cursor: "pointer",
      },
      knowMoreContainer: {
        marginTop: "-5px",
      },
      choose2FAOption: {
        fontWeight: "500",
        fontSize: "14px",
        // color: "#2D355A",
      },
      ChangePaswordMainConatiner: {
        "& .css-7yntvo-MuiPaper-root-MuiDialog-paper": {
          width: "462px",
          "@media (max-width:600px)": {
            width: "343px",
          },
        },
      },
      ChangePasswordBtn: {
        width: "50%",
        // background: "#58F2F0",
        // color: "#040407",
        border: "none",
        margin: "30px 0px",
        borderRadius: "40px",
      },
      changePasswordInput: {
        padding: "0px 40px",
        // color: "#51566B",
        "@media (max-width:600px)": {
          padding: "0px 20px",
        },
      },
      changePasswordMainInput: {
        marginTop: "10px",
      },
      unauthorisedImgBox: {
        display: "flex",
        justifyContent: "center",
      },
      unauthorisedBtnox: {
        display: "flex",
        justifyContent: "center",
      },
      unauthorisedBtn: {
        marginTop: "30px",
      },
      unauthorisedTextBox: {
        // background: "#58f2ef",
        marginTop: "30px",
        borderRadius: "999px",
        padding: "10px 24px",
        fontSize: "12px",
        fontWeight: "700",
        display: "flex",
        alignItems: "center",
      },
      lowFundsTextBox: {
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: "13px",
      },
      redText: {
        // color: "#F95C66",
      },
      blueText: {
        // color: "#2D9CDB",
        cursor: "pointer",
      },
      referralTitle: {
        width: "auto",
        fontWeight: "700",
        fontSize: "30px",
        lineHeight: "35px",
        "@media (max-width:600px)": {
          fontSize: "24px",
        },
      },
      infoText: {
        fontSize: "17px",
        textAlign: "center",
        margin: "25px auto 10px",
      },
      infoLabel: {
        marginBottom: "20px",
        fontSize: "14px",
      },
      // Invite friend modal styles
      inviteFlowMainContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "20px"
      },
      sectionDesktopFlex: {
        display: "none !important",
        [theme.breakpoints.up("md")]: {
          display: "flex !important",
          flexDirection: "column"
        },
      },
      sectionDesktopSm: {
        display: "none !important",
        [theme.breakpoints.down("md")]: {
          display: "block !important",
        },
      },
      sectionDesktopSm1: {
        display: "none !important",
        [theme.breakpoints.down("md")]: {
          display: "flex !important",
        },
      },
      referralLinkBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& img": {
          width: "25px",
          height: "25px",
          marginLeft: "10px",
        },
      },
      inviteFlowItem: {
        width: "33.33%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      inviteFlowImgBox: {
        zIndex: 10,
        padding: "20px",
        width: "70px",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        position: "relative",
        // background: "#fff",
        // border: "1px solid #F7F7F7",
        // boxShadow:
        //   "5.22516e-16px 8.53333px 17.0667px rgba(97, 62, 210, 0.06), inset -1.62561e-16px -2.65481px 2.65481px #ECECEC, inset 1.62561e-16px 2.65481px 2.65481px #FFFFFF",
      },
      inviteFlowImg: {
        width: "100%",
      },
      inviteItemText: {
        fontWeight: 500,
        fontSize: "14px",
        // color: "#51566B",
      },
      dottedLineBox: {
        width: 0,
        position: "relative",
      },
      dottedLineImg: {
        position: "absolute",
        left: "50%",
        top: "30%",
        transform: "translate(-50%,-50%)",
        zIndex: 5,
        padding: "0 50px",
      },
      shareMainContainer: {
        width: "90%",
        margin: "auto",
        marginTop: "30px",
      },
      dialogContentIFM: {
        width: "100%"
      },
      shareCodeContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: "24px",
      },
      shareCodeText: {
        fontWeight: 400,
        fontSize: "14px",
        margin: "5px 0px",
        textAlign: "center",
        // color: "#51566B",
      },
      shareCodeText1: {
        fontWeight: 400,
        fontSize: "14px",
        margin: "0px 0px",
        textAlign: "center",
        // color: "#51566B",
      },
      copyCodeContainer: {
        // background: "#FAF9FD",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: '40px',
        position: "relative",
        padding: "0px 15px",
        borderRadius: "6px",
        "& img": {
          cursor: "pointer"
        }
      },
      copyCodeIconsBox: {
        display: "flex",
        position: "absolute",
        right: "10px",
        // gap: "15px",
        alignItems: "center",
        marginLeft: "20px",
      },
      copyCodeText: {
        // color: "#4F4F4F",
        fontWeight: 400,
        fontSize: "14px",
      },
      iconMainContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "12px",
        marginBottom: "0px"
      },
      iconContainerIFM: {
        // border: "1px solid #F5F5F5",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        "& img": {
          width: "24px",
        },
      },
      inviteModalWidth: {
        width: "500px"
      }

    },
    { name: "modal-shared-mogul" }
  )
);

export default styles;
