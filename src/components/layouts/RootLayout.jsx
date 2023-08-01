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
