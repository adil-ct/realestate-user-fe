import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { useFormik } from "formik";

// Static imports
import DepositScreens from "components/Modal/DepositScreens";
import { RedCancle, AddFields } from "constants/assets";
import MKButton from "components/custom/MKButton";
import MKInput from "components/custom/MKInput";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import PayRent from "components/Modal/PayRent";
import MKBox from "components/custom/MKBox";
import toaster from "utils/toaster";
import validationSchema from "validation/rentPayValidations";
import styles from "./styles";
import {
  fileUpload,
  depositRent,
  getPFAssetData,
  getWalletBalance,
} from "store/actions";
import { routePaths } from "routes/mainRoutes/routePaths";

const RentPayout = () => {
  const classes = styles();
  const [file, setFile] = useState();
  const [openDeposit, setOpenDeposit] = useState(false);
  const [uploadFile, setUploadFile] = useState(false);
  const [rentPayoutData, setRentPayoutData] = useState();
  const [openPayModal, setOpenPayModal] = useState(false);

  const { pfAssetData, walletBalance, isLoading } = useSelector(
    (state) => state.accounts
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getPFAssetData(id));
    dispatch(getWalletBalance())
  }, [id]);

  const initialValues = {
    principle: 0,
    interest: 0,
    taxes: 0,
    insurance: 0,
    HOAFee: 0,
    LLCAdminFee: 0,
    extraFields: [],
    document: {},
  };

  const handleAddFundsSuccess = () => {
    dispatch(getWalletBalance({ handleSuccess: (bal) =>  setRentPayoutData({...rentPayoutData, balance: bal })}));
    // setError(false);
  }

  const fileUploadSuccess = (data) => {
    setUploadFile(false);
    const mgFees = pfAssetData?.property?.cashflow?.propertyMgtFee?.isEnabled ? pfAssetData?.property?.cashflow?.propertyMgtFee?.value : 0
    const rentPay = {
      principal: formik.values.principle,
      interest: formik.values.interest,
      taxes: formik.values.taxes,
      insurance: formik.values.insurance,
      HOAFee: formik.values.HOAFee,
      LLCAdminFee: formik.values.LLCAdminFee,
      llcFlag: pfAssetData?.property?.cashflow?.LLCAdministrationFee?.isEnabled,
      hoaFlag: pfAssetData?.property?.cashflow?.HOAFee?.isEnabled,
      propertyId: id,
      ...(formik.values.extraFields[0] && {
        contingencyVar1: {
          name: formik.values.extraFields[0]?.key ?? "",
          value: formik.values.extraFields[0]?.value ?? "",
          applicable: formik.values.extraFields[0] ? true : false,
        },
      }),
      ...(formik.values.extraFields[1] && {
        contingencyVar2: {
          name: formik.values.extraFields[1]?.key ?? "",
          value: formik.values.extraFields[1]?.value ?? "",
          applicable: formik.values.extraFields[1] ? true : false,
        },
      }),
      ...(formik.values.extraFields[2] && {
        contingencyVar3: {
          name: formik.values.extraFields[2]?.key ?? "",
          value: formik.values.extraFields[2]?.value ?? "",
          applicable: formik.values.extraFields[2] ? true : false,
        },
      }),
      document: data.documents[0],
      balance: walletBalance?.availableBalance,
      totalRentAmount: pfAssetData?.property?.monthlyRent,
      propertyMgtFee: pfAssetData?.property?.cashflow?.propertyMgtFee?.value,
      pFee: pfAssetData?.property?.cashflow?.propertyMgtFee?.isEnabled,
      netRentAmount:
        pfAssetData?.property?.monthlyRent -
        formik.values.principle -
        formik.values.interest -
        formik.values.taxes -
        formik.values.insurance -
        formik.values.HOAFee -
        formik.values.LLCAdminFee -
        mgFees -
        (formik.values.extraFields[0]
          ? formik.values.extraFields[0].value
          : 0) -
        (formik.values.extraFields[1]
          ? formik.values.extraFields[1].value
          : 0) -
        (formik.values.extraFields[2] ? formik.values.extraFields[2].value : 0),
    };
    setRentPayoutData(rentPay);
    setOpenPayModal(true);
  };

  const fileUploadFail = () => {
    setUploadFile(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Integrate API later
      setUploadFile(true);
      const formData = new FormData();
      formData.append("documents", values.document);
      const requestBody = formData;
      dispatch(
        fileUpload({
          requestBody,
          handleSuccess: fileUploadSuccess,
          handleFail: fileUploadFail,
        })
      );
    },
  });

  const submitData = () => {
    formik.submitForm();
  };

  const handlePayClose = () => {
    setOpenPayModal(false);
  };

  const handleClickHere = () => {
    // setOpenPayModal(false);
    // open deposit modal
    setOpenDeposit(true)
    };

  const handleDepositPaySuccess = () => {
    navigate(`${routePaths.PROPERTY_DETAILS_PATH}/${id}`);
    toaster.success("Rent Payout is successful!");
    handlePayClose();
  };

  const handleDepositPayFail = () => {
    handlePayClose();
  };
  const handlePaySuccess = () => {
    let requestBody = Object.assign({}, rentPayoutData);
    delete requestBody.totalRentAmount;
    delete requestBody.netRentAmount;
    delete requestBody.balance;
    delete requestBody.pFee;
    delete requestBody.propertyMgtFee
    delete requestBody.llcFlag
    delete requestBody.hoaFlag
    dispatch(
      depositRent({
        requestBody,
        handleSuccess: handleDepositPaySuccess,
        handleFail: handleDepositPayFail,
      })
    );
  };

  const handleUploadFile = (e) => {
    setFile(e.target.files[0]);
    formik.setFieldValue("document", e.target.files[0]);
  };

  const addField = () => {
    formik.setValues({
      ...formik.values,
      extraFields: [
        ...formik.values.extraFields,
        {
          key: "",
          value: "",
        },
      ],
    });
  };

  const removeField = (fieldIndex) => {
    const updatedFields = formik.values.extraFields.filter(
      (item, index) => index != fieldIndex
    );
    formik.setValues({ ...formik.values, extraFields: updatedFields });
  };

  return (
    <Box className={classes.paddingContainer}>
      <Box className={classes.mainContainer}>
        <MKBox className={classes.accountSettingsMainContainer}>
          <MKBox className={classes.AccountSettingInsideContainer}>
            <MKBox className={classes.AccountSettingLabel}>
              Enter Details for Rent Payout
            </MKBox>
            <MKBox
              width="100%"
              component="form"
              method="post"
              autoComplete="off"
              onSubmit={() => {}}
            >
              <MKBox py={3} px={5}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      fullWidth
                      id="principle"
                      name="principle"
                      label="Principle"
                      type="number"
                      value={formik.values.principle}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.principle &&
                        Boolean(formik.errors.principle)
                      }
                      helperText={
                        formik.touched.principle && formik.errors.principle
                      }
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <MKInput
                      fullWidth
                      id="interest"
                      name="interest"
                      label="Interest"
                      type="number"
                      value={formik.values.interest}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.interest &&
                        Boolean(formik.errors.interest)
                      }
                      helperText={
                        formik.touched.interest && formik.errors.interest
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      fullWidth
                      id="taxes"
                      name="taxes"
                      label="Taxes"
                      type="number"
                      value={formik.values.taxes}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.taxes && Boolean(formik.errors.taxes)
                      }
                      helperText={formik.touched.taxes && formik.errors.taxes}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      fullWidth
                      id="insurance"
                      name="insurance"
                      label="Insurance"
                      type="number"
                      value={formik.values.insurance}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.insurance &&
                        Boolean(formik.errors.insurance)
                      }
                      helperText={
                        formik.touched.insurance && formik.errors.insurance
                      }
                    />
                  </Grid>
                  {  pfAssetData?.property?.cashflow?.HOAFee?.isEnabled && <Grid item xs={12} md={6}>
                    <MKInput
                      fullWidth
                      id="HOAFee"
                      name="HOAFee"
                      label="HOA Fee"
                      type="number"
                      value={formik.values.HOAFee}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.HOAFee && Boolean(formik.errors.HOAFee)
                      }
                      helperText={formik.touched.HOAFee && formik.errors.HOAFee}
                    />
                  </Grid> }
                  {  pfAssetData?.property?.cashflow?.LLCAdministrationFee?.isEnabled && <Grid item xs={12} md={6}>
                    <MKInput
                      fullWidth
                      id="LLCAdminFee"
                      name="LLCAdminFee"
                      label="LLC Admin Fee"
                      type="number"
                      value={formik.values.LLCAdminFee}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.LLCAdminFee &&
                        Boolean(formik.errors.LLCAdminFee)
                      }
                      helperText={
                        formik.touched.LLCAdminFee && formik.errors.LLCAdminFee
                      }
                    />
                  </Grid>
                  }
                  {formik.values.extraFields?.length
                    ? formik.values.extraFields.map((field, index) => (
                        <>
                          <Grid
                            item
                            xs={12}
                            md={6}
                            className={classes.extraFields}
                          >
                            <div className={classes.extraFieldCount}>
                              {index + 1}
                            </div>
                            <MKInput
                              fullWidth
                              id={`extraFields.${index}.key`}
                              name={`extraFields.${index}.key`}
                              label="Key"
                              value={field.key}
                              onChange={formik.handleChange}
                              error={
                                formik?.touched?.extraFields?.length
                                  ? formik?.touched?.extraFields?.[index]?.key
                                    ? Boolean(
                                        formik?.errors?.extraFields?.[index]
                                          ?.key
                                      )
                                    : ""
                                  : ""
                              }
                              helperText={
                                formik?.touched?.extraFields?.length
                                  ? formik?.touched?.extraFields?.[index]?.key
                                    ? formik?.errors?.extraFields?.[index]?.key
                                    : ""
                                  : ""
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            md={6}
                            className={classes.extraFields}
                          >
                            <div
                              className={classes.extraFieldCancle}
                              onClick={() => removeField(index)}
                            >
                              <img src={RedCancle} />
                            </div>
                            <MKInput
                              fullWidth
                              id={`extraFields.${index}.value`}
                              name={`extraFields.${index}.value`}
                              label="Value"
                              type="number"
                              value={field?.value}
                              onChange={formik.handleChange}
                              error={
                                formik.touched.extraFields?.length
                                  ? formik.touched.extraFields?.[index]?.value
                                    ? Boolean(
                                        formik.errors.extraFields?.[index]
                                          ?.value
                                      )
                                    : ""
                                  : ""
                              }
                              helperText={
                                formik.touched.extraFields?.length
                                  ? formik.touched.extraFields?.[index]?.value
                                    ? formik.errors.extraFields?.[index]?.value
                                    : ""
                                  : ""
                              }
                            />
                          </Grid>
                        </>
                      ))
                    : null}
                  {formik.values.extraFields.length < 3 ? (
                    <Grid item xs={12} md={12}>
                      <MKBox
                        onClick={addField}
                        className={classes.addFieldsBox}
                      >
                        <img src={AddFields} className={classes.addFieldsImg} />{" "}
                        Add Field
                      </MKBox>
                    </Grid>
                  ) : null}

                  {/* Upload */}
                  <Grid item xs={12} md={12}>
                    <div className={classes.docTitle}>Document</div>
                    <div
                      className={classes.fileUploadMainBox}
                      style={
                        formik.touched.document && formik.errors.document
                          ? { borderColor: 'error' } //{ borderColor: "#D32F2F" }
                          : null
                      }
                    >
                      <div className={classes.fileUploadText}>
                        {file ? file.name : "No file selected"}
                      </div>
                      <div className={classes.uploadBtnBox}>
                        <label htmlFor="upload-photo">Browse</label>
                        <input
                          type="file"
                          id="upload-photo"
                          hidden
                          onChange={handleUploadFile}
                        />
                      </div>
                    </div>
                    <div className={classes.documentErrorBox}>
                      {formik.touched.document ? formik.errors.document : ""}
                    </div>
                  </Grid>

                  {/* Submit button */}
                  <MKBox className={classes.btnContainer}>
                    <MKButton
                      variant="outlined"
                      // color="primary"
                      className={classes.butns}
                      onClick={() => navigate(routePaths.PORTFOLIO_PATH)}
                    >
                      <ButtonSpinner text="Cancel" />
                    </MKButton>
                    <MKButton
                      variant="gradient"
                      // color="primary"
                      className={classes.butns}
                      onClick={submitData}
                    >
                      <ButtonSpinner isLoading={uploadFile} text="Submit" />
                    </MKButton>
                  </MKBox>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
          <PayRent
            open={openPayModal}
            data={rentPayoutData}
            handleClose={handlePayClose}
            handleSuccess={handlePaySuccess}
            handleClickHere={handleClickHere}
            isLoading={isLoading?.depositRent}
          />
        </MKBox>
      </Box>
      <DepositScreens open={openDeposit} setOpen={setOpenDeposit} amount={parseFloat(Number(rentPayoutData?.netRentAmount) - walletBalance?.availableBalance).toFixed(2)} noAction handleAddFundsSuccess={handleAddFundsSuccess} />
    </Box>
  );
};

export default RentPayout;
