import RootLayout from "@/components/layouts/RootLayout";
import React from "react";
import { useSelector } from "react-redux";

const PcbuilderPage = () => {
  const { pcomponents } = useSelector((state) => state.pcbuilder);
  console.log(pcomponents);
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
