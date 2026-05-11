import { React } from "react";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import { useSelector, useDispatch } from "react-redux";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useFormik } from "formik";
import { Typography } from "@mui/material";
import * as yup from "yup";
import toaster from "utils/toaster";

// Static imports
import {
  WITHDRAW_AMOUNT_REQUIRED,
  WITHDRAW_ACCOUNT_REQUIRED,
} from "constants/errorConstants";
import MKBox from "components/custom/MKBox";
import MKInput from "components/custom/MKInput";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import MKTypography from "components/custom/MKTypography";
import CloseButton from "components/CloseButton";
import { WithdrawModuls } from "./styles/styles";
import { withdrawCurrency } from "store/actions";

const WithDrawModuls = ({
  open,
  handleWithdraw,
  handelDepositModalSuccess,
  withdrawMethod,
  onClose,
  backBtn,
}) => {
  const classes = WithdrawModuls();
  const dispatch = useDispatch();
  const { isLoading, serviceFees } = useSelector((state) => state.accounts);
  const nfObject = new Intl.NumberFormat("en-US");
  const initialValues = {
    withdrawAccount: "",
    withdrawAmount: "",
  };

  const addWireBankAccountValidation = yup.object({
    withdrawAccount: yup.string().required(WITHDRAW_ACCOUNT_REQUIRED),
    withdrawAmount: yup
      .number()
      .required(WITHDRAW_AMOUNT_REQUIRED)
      .min(
        withdrawMethod === "wire" ? serviceFees[0]?.wirePayoutFee : 0,
        `Withdraw amount should be greater than ${serviceFees[0]?.wirePayoutFee}`
      ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: addWireBankAccountValidation,
    onSubmit: (values) => {
      withdrawHandler(values);
    },
  });

  const handleSuccess = () => {
    handleClick();
    toaster.success("Withdraw successful!");
    handelDepositModalSuccess(true);
  };

  const withdrawHandler = async (values) => {
    //
    const requestBody = {
      toAddress: values?.withdrawAccount,
      qty: values?.withdrawAmount,
    };
    dispatch(withdrawCurrency({ requestBody, handleSuccess }));
  };

  const handleClick = () => {
    handleWithdraw(false);
    formik.resetForm();
    // setServiceFeeAmount(0);
    onClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        className={classes.mainDialog4}
        aria-labelledby="responsive-dialog-title"
      >
        <MKBox>
          <MKBox
            display="flex"
            justifyContent="space-between"
            top="0px"
            left={30}
          >
            <Typography
              variant="button"
              className={classes.backButton}
              display="flex"
              alignItems="center"
              onClick={() => {
                formik.resetForm();
                backBtn();
              }}
            >
              <ArrowBackIosIcon />
              Back
            </Typography>
            <CloseButton
              className={classes.closeIconRight}
              P={3}
              onClick={() => {
                handleClick();
              }}
            />
          </MKBox>
          <DialogTitle
            display="flex"
            justifyContent="center"
            className={classes.title}
          >
            <Typography variant="h3" width={400} className={classes.mainTitle}>
              Withdraw
            </Typography>
          </DialogTitle>
          <MKBox className={classes.mainpadding}>
            <MKBox
              width="100%"
              component="form"
              method="post"
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <Grid item xs={12}>
                <MKInput
                  fullWidth
                  id="from"
                  name="withdrawAccount"
                  label="To"
                  placeholder="Wallet Address"
                  className={classes.withdrawAccount}
                  value={formik.values.withdrawAccount}
                  // InputProps={{ classes: { input: classes.placeholderFixed } }}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.withdrawAccount &&
                    Boolean(formik.errors.withdrawAccount)
                  }
                  helperText={
                    formik.touched.withdrawAccount &&
                    formik.errors.withdrawAccount
                  }
                />
              </Grid>
              <Grid mt={2}>
                <MKTypography variant="h7" className={classes.subHeader} mt={3}>
                  Amount
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={12} lg={12} sm={12}>
                <MKInput
                  fullWidth
                  id="withdrawAmount"
                  name="withdrawAmount"
                  placeholder="Amount"
                  // labelColor={classes.labelColor}
                  value={nfObject.format(formik.values.withdrawAmount)}
                  onChange={(e) => {
                    const formattedValue = e?.target?.value;
                    const value = formattedValue.replaceAll(",", "");
                    if (isNaN(value)) return;
                    formik.setFieldValue("withdrawAmount", value);
                  }}
                  error={
                    formik.touched.withdrawAmount &&
                    Boolean(formik.errors.withdrawAmount)
                  }
                  helperText={
                    formik.touched.withdrawAmount &&
                    formik.errors.withdrawAmount
                  }
                />
              </Grid>
              <Grid container alignItems="center" mt={4} mb={5}>
                <Grid
                  item
                  xs={12}
                  lg={12}
                  sm={12}
                  display="flex"
                  justifyContent="space-evenly"
                >
                  <MKButton
                    type="submit"
                    variant="gradient"
                    // color="primary"
                    className={classes.button50Width}
                  >
                    <ButtonSpinner
                      isLoading={isLoading.withdrawCurrency}
                      text="Submit"
                    />
                  </MKButton>
                </Grid>
              </Grid>
            </MKBox>
          </MKBox>
        </MKBox>
      </Dialog>
    </div>
  );
};

export default WithDrawModuls;
