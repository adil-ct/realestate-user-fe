import React from "react";
import { styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";

const ResponsiveModal = styled(Modal)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // alignItems: "center",
  position: "absolute",
  top: "0%",
  left: "0%",
  width: "100%",
  height: "100vh",
  // backgroundColor: "transparent",
  "& .MuiBackdrop-root": {
    display: "none",
  },
}));

export default function MKResponsiveModal({ element, open, setOpen }) {
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ResponsiveModal
        open={open}
        onClose={handleClose}
        sx={{
          "@media (max-width: 600px)": {
            width: "90vw",
            position: "absolute",
            top: "0vh",
            left: "0vw",
            pt: "10vh",
            "& .MuiBackdrop-root": {
              display: "block",
            },
          },
        }}
      >
        {element}
      </ResponsiveModal>
    </div>
  );
}
