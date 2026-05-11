import { React } from "react";
// import { useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import { DialogTitle, Typography} from "@mui/material";

// Static imports
import MKBox from "components/custom/MKBox";
import CloseButton from "components/CloseButton";
import AddCardDetails from "components/Stripe/Card"
import { AddCardDetailsModuls } from "./styles/styles";
// import { getListOfCards } from "store/actions";

const AddCardDetailModuls = ({ open, handleAddCard }) => {
  const classes = AddCardDetailsModuls();

  const handleClick = () => {
    handleAddCard(false);
  };

  return (
    <div>
      <Dialog open={open} aria-labelledby="responsive-dialog-title">
        <MKBox>
          <MKBox display="flex" justifyContent="right" top="30px" left={30}>
            <CloseButton
              className={classes.closeIconRight}
              P={3}
              onClick={handleClick}
            />
          </MKBox>
          <DialogTitle
            display="flex"
            justifyContent="center"
            className={classes.title}
          >
            <Typography variant="h3" width={400} className={classes.mainTitle}>
              Add Card Details
            </Typography>
          </DialogTitle>
         <AddCardDetails type="account" handleSuccess={handleClick}/>
        </MKBox>
      </Dialog>
    </div>
  );
};

export default AddCardDetailModuls;
