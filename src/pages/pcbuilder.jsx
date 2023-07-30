import RootLayout from "@/components/layouts/RootLayout";
import React from "react";

const PcbuilderPage = () => {
  return (
    <div>
      <h1>here will be pc builder</h1>
    </div>
  );
};

export default PcbuilderPage;

PcbuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
