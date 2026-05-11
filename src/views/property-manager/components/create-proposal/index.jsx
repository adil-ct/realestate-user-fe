import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, FormControl, Grid, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useFormik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import "jodit";
import dayjs from "dayjs";
import JoditEditor from "jodit-react";
import { useQuery } from "utils/useQuery";
import moment from "moment";
import DescriptionIcon from "@mui/icons-material/Description";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
} from "video-react";

import { getPFAssetData } from "store/actions";
import "jodit/build/jodit.min.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import styles from "./styles";
import MKTypography from "components/custom/MKTypography";
import MKBox from "components/custom/MKBox";
import MKInput from "components/custom/MKInput";
import MKButton from "components/custom/MKButton";
import ButtonSpinner from "components/Loader/ButtonSpinner";
import CloseButton from "components/CloseButton";
import validationSchema from "validation/propertyManager";
import DatePickerIcon from "assets/images/svgs/datePickerIcon";
import { uploadDocumentSaga } from "store/actions";
import { createProposalSaga } from "store/actions";
import { getProposalDetailsSaga } from "store/actions";
import { DatePicker } from "@mui/x-date-pickers";
import toaster from "utils/toaster";
import PropertyDetail from "components/PropertyDetail";
import { routePaths } from "routes/mainRoutes/routePaths";

const copyStringToClipboard = function (str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const facilityMergeFields = [
  "FacilityNumber",
  "FacilityName",
  "Address",
  "MapCategory",
  "Latitude",
  "Longitude",
  "ReceivingPlant",
  "TrunkLine",
  "SiteElevation",
];
const inspectionMergeFields = ["InspectionCompleteDate", "InspectionEventType"];
const createOptionGroupElement = (mergeFields, optionGrouplabel) => {
  let optionGroupElement = document.createElement("optgroup");
  optionGroupElement.setAttribute("label", optionGrouplabel);
  for (let index = 0; index < mergeFields.length; index++) {
    let optionElement = document.createElement("option");
    optionElement.setAttribute("class", "merge-field-select-option");
    optionElement.setAttribute("value", mergeFields[index]);
    optionElement.text = mergeFields[index];
    optionGroupElement.appendChild(optionElement);
  }
  return optionGroupElement;
};
const buttons = [
  "undo",
  "redo",
  "|",
  "bold",
  "strikethrough",
  "underline",
  "italic",
  "|",
  "align",
  "|",
  "ul",
  "ol",
  "outdent",
  "indent",
  "|",
  "font",
  "fontsize",
  "brush",
  "paragraph",
  "|",
  "link",
  "table",
  "|",
  "eraser",
  "copyformat",
  "|",
  {
    name: "insertMergeField",
    tooltip: "Insert Merge Field",
    iconURL: "images/merge.png",
    popup: (editor) => {
      function onSelected(e) {
        let mergeField = e.target.value;
        if (mergeField) {
          console.log(mergeField);
          editor.selection.insertNode(
            editor.create.inside.fromHTML("{{" + mergeField + "}}")
          );
        }
      }
      let divElement = editor.create.div("merge-field-popup");

      let labelElement = document.createElement("label");
      labelElement.setAttribute("class", "merge-field-label");
      labelElement.text = "Merge field: ";
      divElement.appendChild(labelElement);

      let selectElement = document.createElement("select");
      selectElement.setAttribute("class", "merge-field-select");
      selectElement.appendChild(
        createOptionGroupElement(facilityMergeFields, "Facility")
      );
      selectElement.appendChild(
        createOptionGroupElement(inspectionMergeFields, "Inspection")
      );
      selectElement.onchange = onSelected;
      divElement.appendChild(selectElement);

      console.log(divElement);
      return divElement;
    },
  },
  {
    name: "copyContent",
    tooltip: "Copy HTML to Clipboard",
    iconURL: "images/copy.png",
    exec: function (editor) {
      let html = editor.value;
      copyStringToClipboard(html);
    },
  },
];

const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: "en",
  toolbarButtonSize: "medium",
  toolbarAdaptive: false,
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true,
  },
  width: "auto",
  height: 400,
  placeholder: "Enter description",
};

const EditProposal = () => {
  const classes = styles();
  const { state } = useLocation();
  const navigate = useNavigate();
  const query = useQuery();
  const id = query.get("id");
  const pid = query.get("pid");

  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState([]);
  const [disable, setDisable] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.pManager);
  const { pfAssetData } = useSelector((state) => state.accounts);
  const { proposalDetails } = useSelector((state) => state.pManager);

  const {
    title,
    votingStartDate,
    votingEndDate,
    voteOptions,
    summary,
    description,
    documents,
    propertyId,
  } = proposalDetails || "";

  const initialValues = state?.edit
    ? {
        propertyId: propertyId?._id,
        title,
        votingStartDate: votingStartDate
          ? dayjs(votingStartDate.replace(".000Z", ""))
          : null,
        votingEndDate: votingEndDate
          ? dayjs(votingEndDate.replace(".999Z", ""))
          : null,
        votingOption1: voteOptions ? voteOptions[0]?.label : "",
        votingOption2: voteOptions ? voteOptions[1]?.label : "",
        summary,
        description,
        documents: [],
      }
    : {
        propertyId: pid || "",
        title: "",
        votingStartDate: null,
        votingEndDate: null,
        votingOption1: "",
        votingOption2: "",
        summary: "",
        description: "",
        documents: [],
      };

  // Get proposal details
  useEffect(() => {
    if (id) dispatch(getProposalDetailsSaga({ id }));
  }, [disable]);

  // Store uploaded documents to displayfor edit functionality
  useEffect(() => {
    if (state?.edit && documents?.length > 0) {
      setUploadedFiles(documents);
    }
  }, [documents]);

  // Get property details
  useEffect(() => {
    if (pid) dispatch(getPFAssetData(pid));
  }, [pid]);

  // Go back to proposal page
  const handleCancle = () => {
    navigate(`${routePaths.PROPERTY_MGR_VIEW_PROPOSAL_PATH}/${pid}`);
  };

  // Success upload image api call
  const handleUploadSuccess = (data) => {
    formik.setFieldValue("documents", data);
    setUploadedFiles([...uploadedFiles, ...data]);
  };

  const handleUploadFile = (e) => {
    if (validateFileSize(e.target.files)) {
      const data = new FormData();
      Object.keys(e.target.files)?.forEach((item) => {
        data.append("documents", e?.target?.files[item]);
      });
      dispatch(
        uploadDocumentSaga({
          requestBody: data,
          handleSuccess: handleUploadSuccess,
        })
      );
      setFile(e.target.files);
    }
  };

  const validateFileSize = (files) => {
    if (files.length > 0) {
      for (let i = 0; i <= files.length - 1; i++) {
        const fsize = files.item(i).size;
        const file = Math.round(fsize / 1024);
        // The size of the file.
        if (file >= 15360) {
          toaster.error("File too big, please select a file less than 15mb");
          return false;
        } else {
          return true;
        }
      }
    }
  };

  // Delete selected image

  const deleteVideo = (index, formik, values) => {
    if (formik) {
      const updatedDocuments = values
        ?.filter((doc) => doc.contentType.includes("video/"))
        ?.filter((item, itemIndex) => itemIndex != index);
      formik.setFieldValue("documents", updatedDocuments);
    } else {
      const prevDocuments = uploadedFiles?.filter(
        (doc) => !doc.contentType.includes("video/")
      );
      const updatedDocuments = uploadedFiles
        ?.filter((doc) => doc.contentType.includes("video/"))
        ?.filter((item, itemIndex) => itemIndex != index);
      setUploadedFiles([...updatedDocuments, ...prevDocuments]);
    }
  };

  const deleteDocument = (index, formik, values) => {
    if (formik) {
      const updatedDocuments = values
        ?.filter(
          (doc) =>
            !doc.contentType.includes("image/") &&
            !doc.contentType.includes("video/")
        )
        ?.filter((item, itemIndex) => itemIndex != index);
      formik.setFieldValue("documents", updatedDocuments);
    } else {
      const prevDocuments = uploadedFiles?.filter(
        (doc) =>
          doc.contentType.includes("image/") ||
          doc.contentType.includes("video/")
      );
      const updatedDocuments = uploadedFiles
        ?.filter(
          (doc) =>
            !doc.contentType.includes("image/") &&
            !doc.contentType.includes("video/")
        )
        ?.filter((item, itemIndex) => itemIndex != index);
      setUploadedFiles([...updatedDocuments, ...prevDocuments]);
    }
  };

  // Delete selected image
  const deleteImageDocument = (index, formik, values) => {
    if (formik) {
      const updatedDocuments = values
        ?.filter((doc) => doc.contentType.includes("image/"))
        ?.filter((item, itemIndex) => itemIndex != index);
      formik.setFieldValue("documents", updatedDocuments);
    } else {
      const prevDocuments = uploadedFiles?.filter(
        (doc) => !doc.contentType.includes("image/")
      );
      const updatedDocuments = uploadedFiles
        ?.filter((doc) => doc.contentType.includes("image/"))
        ?.filter((item, itemIndex) => itemIndex != index);
      setUploadedFiles([...prevDocuments, ...updatedDocuments]);
    }
  };

  // Create/Edit Api success
  const handleSuccess = () => {
    setUploadedFiles([]);
    setFile([]);
    if (state?.edit) {
      setDisable(true);
      window.scrollTo(0, 0);
    } else navigate(`${routePaths.PROPERTY_MGR_PROPERTY_PROPOSALS_PATH}/${pid}`);
  };

  // Create/Edit Api call
  const submitData = (values) => {
    const {
      title,
      summary,
      propertyId,
      description,
      votingEndDate,
      votingStartDate,
      votingOption1,
      votingOption2,
    } = values;
    const requestBody = state?.edit
      ? {
          title,
          summary,
          propertyId,
          documents: uploadedFiles,
          description,
          votingEndDate: moment(new Date(votingEndDate)).format("L"),
          votingStartDate: moment(new Date(votingStartDate)).format("L"),
          voteOptions: [
            {
              label: votingOption1,
            },
            {
              label: votingOption2,
            },
          ],
        }
      : {
          title,
          summary,
          propertyId,
          documents: uploadedFiles,
          description,
          votingEndDate: moment(new Date(votingEndDate)).format("L"),
          votingStartDate: moment(new Date(votingStartDate)).format("L"),
          voteOptions: [
            {
              label: votingOption1,
            },
            {
              label: votingOption2,
            },
          ],
        };

    if (state?.edit) {
      dispatch(
        createProposalSaga({
          requestBody,
          endpoint: `updateProposal/${id}`,
          type: "patch",
          handleSuccess,
        })
      );
    } else {
      dispatch(
        createProposalSaga({
          requestBody,
          endpoint: "createProposal",
          type: "post",
          handleSuccess,
        })
      );
    }
  };

  function disablePrevDates(startDate) {
    const startSeconds = Date.parse(startDate);
    return (date) => {
      return Date.parse(date) < startSeconds;
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      submitData(values);
    },
  });

  return (
    <Box className={classes.paddingContainer}>
      <Box className={classes.mainContainer}>
        <PropertyDetail id={id} pfAssetData={pfAssetData} />
        <MKBox className={classes.accountSettingsMainContainer}>
          <MKBox className={classes.AccountSettingInsideContainer}>
            <MKBox className={classes.AccountSettingLabel}>
              {state?.edit ? "Edit Proposal" : "Create Proposal"}
            </MKBox>
            <MKBox
              width="100%"
              component="form"
              autoComplete="off"
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
              }}
            >
              <MKBox className={classes.pBox}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={12}>
                    <MKInput
                      fullWidth
                      id="title"
                      name="title"
                      label="Title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.title && Boolean(formik.errors.title)
                      }
                      helperText={formik.touched.title && formik.errors.title}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl
                      fullWidth
                      error={
                        formik.touched.votingStartDate &&
                        Boolean(formik.errors.votingStartDate)
                      }
                    >
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          shouldDisableDate={disablePrevDates(new Date())}
                          open={openStartDate}
                          onOpen={() => setOpenStartDate(true)}
                          onClose={() => setOpenStartDate(false)}
                          id="votingStartDate"
                          name="votingStartDate"
                          label="Voting Start Date"
                          value={formik.values.votingStartDate}
                          onChange={(newValue) => {
                            formik.setFieldValue(
                              "votingStartDate",
                              dayjs(newValue)
                            );
                          }}
                          components={{
                            OpenPickerIcon: DatePickerIcon,
                          }}
                          renderInput={(params) => (
                            <MKInput
                              {...params}
                              id="votingStartDate"
                              name="votingStartDate"
                              helperText={
                                formik.touched.votingStartDate &&
                                formik.errors.votingStartDate
                              }
                              onClick={() => setOpenStartDate(true)}
                              onBlur={formik.handleBlur}
                              error={
                                formik.touched.votingStartDate &&
                                Boolean(formik.errors.votingStartDate)
                              }
                              fullWidth
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      fullWidth
                      error={
                        formik.touched.votingStartDate &&
                        Boolean(formik.errors.votingStartDate)
                      }
                    >
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          disablePast
                          open={openEndDate}
                          shouldDisableDate={disablePrevDates(new Date())}
                          onOpen={() => setOpenEndDate(true)}
                          onClose={() => setOpenEndDate(false)}
                          id="votingEndDate"
                          name="votingEndDate"
                          label="Voting End Date"
                          value={formik.values.votingEndDate}
                          onChange={(newValue) => {
                            formik.setFieldValue(
                              "votingEndDate",
                              dayjs(newValue)
                            );
                          }}
                          components={{
                            OpenPickerIcon: DatePickerIcon,
                          }}
                          renderInput={(params) => (
                            <MKInput
                              {...params}
                              id="votingEndDate"
                              name="votingEndDate"
                              onBlur={formik.handleBlur}
                              onClick={() => setOpenEndDate(true)}
                              helperText={
                                formik.touched.votingEndDate &&
                                formik.errors.votingEndDate
                              }
                              error={
                                formik.touched.votingEndDate &&
                                Boolean(formik.errors.votingEndDate)
                              }
                              fullWidth
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      fullWidth
                      id="votingOption1"
                      name="votingOption1"
                      label="Voting option 1 (For the proposal)"
                      value={formik.values.votingOption1}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.votingOption1 &&
                        Boolean(formik.errors.votingOption1)
                      }
                      helperText={
                        formik.touched.votingOption1 &&
                        formik.errors.votingOption1
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      fullWidth
                      id="votingOption2"
                      name="votingOption2"
                      label="Voting option 2 (Against the proposal)"
                      value={formik.values.votingOption2}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.votingOption2 &&
                        Boolean(formik.errors.votingOption2)
                      }
                      helperText={
                        formik.touched.votingOption2 &&
                        formik.errors.votingOption2
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <MKInput
                      fullWidth
                      id="summary"
                      name="summary"
                      label="Summary"
                      multiline
                      rows={3}
                      value={formik.values.summary}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.summary && Boolean(formik.errors.summary)
                      }
                      helperText={
                        formik.touched.summary && formik.errors.summary
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography className={classes.descriptionText}>
                      Description
                    </Typography>
                    <Box
                      className={
                        Boolean(formik.errors.description) &&
                        formik.touched.description
                          ? classes.errorBorderBox
                          : classes.borderBox
                      }
                    >
                      <JoditEditor
                        value={formik.values.description}
                        config={editorConfig}
                        // style={{ border: "2px solid blue" }}
                        onChange={(value) => {
                          formik.setFieldValue("description", value);
                        }}
                      />
                    </Box>
                    {Boolean(formik.errors.description) &&
                      formik.touched.description && (
                        <Typography className={classes.descriptionTextError}>
                          {formik.errors.description}
                        </Typography>
                      )}
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className={classes.docTitle}>
                      Attachment:{" "}
                      <b className={classes.dFlexDoc}>
                        Supported File Type - Doc , Pdf , Media{" "}
                      </b>
                    </div>
                    <div
                      className={classes.fileUploadMainBox}
                      style={
                        formik.touched.documents && formik.errors.documents
                          ? { borderColor: 'error' } //{ borderColor: "#D32F2F" }
                          : null
                      }
                    >
                      <div className={classes.fileUploadText}>
                        {uploadedFiles.length > 1
                          ? loader?.uploadDocument
                            ? "Upload in progress..."
                            : uploadedFiles.length + " files selected"
                          : uploadedFiles.length === 1
                          ? loader?.uploadDocument
                            ? "Upload in progress..."
                            : "1 file selected"
                          : loader?.uploadDocument
                          ? "Upload in progress..."
                          : "No file selected"}
                      </div>
                      <div className={classes.uploadBtnBox}>
                        <label
                          className={classes.inputText}
                          htmlFor="upload-photo"
                        >
                          Browse
                        </label>
                        <input
                          type="file"
                          id="upload-photo"
                          disabled={loader?.uploadDocument || disable}
                          hidden
                          accept=".doc, .docx, application/msword, application/pdf, image/*, video/mp4,video/x-m4v,video/,"
                          multiple
                          onChange={handleUploadFile}
                        />
                      </div>
                    </div>
                    <Typography className={classes.descriptionTextError1}>
                      Max. allowed size to upload is 15 MB
                    </Typography>
                    <div className={classes.documentErrorBox}>
                      {formik.touched.documents ? formik.errors.documents : ""}
                    </div>
                    <div className={classes.fileUploadImage1}>
                      {uploadedFiles
                        ?.filter((doc) => doc.contentType.includes("video/"))
                        .map((image, index) => {
                          return (
                            <div
                              className={classes.posFlex1}
                              key={image.key}
                              style={{ marginBottom: "10px" }}
                            >
                              <Player
                                playsInline
                                fluid={false}
                                width={"100%"}
                                height={200}
                                key={image.key}
                              >
                                <source src={image?.url} />
                                <ControlBar>
                                  <ReplayControl seconds={10} order={1.1} />
                                  <ForwardControl seconds={30} order={1.2} />
                                  <CurrentTimeDisplay order={4.1} />
                                  <TimeDivider order={4.2} />
                                  <PlaybackRateMenuButton
                                    rates={[5, 2, 1, 0.5, 0.1]}
                                    order={7.1}
                                  />
                                  <VolumeMenuButton />
                                </ControlBar>
                                <BigPlayButton position="center" />
                              </Player>
                              <CloseButton
                                // color="error"
                                onClick={() => deleteVideo(index, false)}
                                className={classes.closeIcon}
                              />
                            </div>
                          );
                        })}
                    </div>
                    <div className={classes.fileUploadImage1}>
                      {uploadedFiles
                        ?.filter(
                          (doc) =>
                            !doc.contentType.includes("image/") &&
                            !doc.contentType.includes("video/")
                        )
                        .map((image, index) => {
                          return (
                            <div className={classes.posFlex} key={image.key}>
                              <MKTypography
                                // color="#2D9CDB"
                                fontSize="14px"
                                className={classes.docStyle}
                                target="_blank"
                                component="a"
                                marginLeft="10px"
                                href={image.url}
                                download
                                display="flex"
                                alignItems="center"
                                fontWeight="regular"
                                marginRight="10px"
                              >
                                {image.contentType === "application/pdf" ? (
                                  <PictureAsPdfIcon className={classes.pIcon} />
                                ) : (
                                  <DescriptionIcon
                                    fontSize="20px"
                                    className={classes.dIcon}
                                  />
                                )}
                                {image.key}
                              </MKTypography>
                              <CloseButton
                                // color="error"
                                onClick={() => deleteDocument(index, false)}
                                className={classes.closeIcon1}
                              />
                            </div>
                          );
                        })}
                    </div>
                    <div className={classes.fileUploadImage}>
                      {uploadedFiles
                        ?.filter((doc) => doc.contentType.includes("image/"))
                        .map((image, index) => {
                          return (
                            <div
                              className={classes.posRelative}
                              key={image.name}
                            >
                              <img
                                src={image.url}
                                alt={image.name}
                                className={classes.editImage}
                              />
                              <CloseButton
                                // color="error"
                                onClick={() => {
                                  deleteImageDocument(index, false);
                                }}
                                className={classes.closeIcon}
                              />
                            </div>
                          );
                        })}
                    </div>
                  </Grid>

                  <Grid container alignItems="center" justifyContent="center">
                    <Grid
                      item
                      xs={12}
                      lg={6}
                      sm={12}
                      className={classes.nextBtnBox}
                    >
                      {state?.edit ? (
                        <>
                          <MKButton
                            variant="gradient"
                            // color="primary"
                            className={classes.nextBtn}
                            onClick={handleCancle}
                          >
                            <ButtonSpinner text="Cancel" />
                          </MKButton>
                          <MKButton
                            variant="gradient"
                            // color="primary"
                            disabled={loader?.uploadDocument || disable}
                            type="submit"
                            className={classes.nextBtn1}
                          >
                            <ButtonSpinner
                              isLoading={loader?.createProposal}
                              text="Save Changes"
                            />
                          </MKButton>
                        </>
                      ) : (
                        <MKButton
                          disabled={
                            loader?.uploadDocument ||
                            !(formik.isValid && formik.dirty)
                          }
                          variant="gradient"
                          // color="primary"
                          type="submit"
                          className={classes.nextBtn}
                        >
                          <ButtonSpinner
                            isLoading={loader?.createProposal}
                            text="Submit Proposal"
                          />
                        </MKButton>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </MKBox>
      </Box>
    </Box>
  );
};

export default EditProposal;
