import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
