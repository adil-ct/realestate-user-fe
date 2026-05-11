import React from "react";
import { Dialog, DialogContent } from "@mui/material";

// Static imports
import styles from "./styles";
import RegisterForm from "views/auth/Register/RegisterForm";

const RegisterModal = ({
  open,
  noSubHeader,
  noIdCheck= false,
  id="",
}) => {
  const classes = styles();

  return (
    <>
      <Dialog open={open} className={classes.mainDialog3}>
        <DialogContent
          display="flex"
          justify="center"
          p={0}
          className={classes.dialogContent1}
        >
            <RegisterForm pid={id} noIdCheck={noIdCheck} noSubHeader={noSubHeader}/>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegisterModal;
