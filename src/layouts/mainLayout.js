import React from "react";
import { Box } from "@mui/system";

// Relative imports
import Footer from "components/Footer";
import HeaderContainer from "components/HeaderContainer";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <Box className="layout_body">{children}</Box>
      <Footer />
    </>
  );
};

export default MainLayout;
