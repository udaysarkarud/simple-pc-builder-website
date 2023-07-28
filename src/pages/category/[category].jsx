import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = () => {
  const {
    query: { category },
  } = useRouter();
  return (
    <div>
      <h1>category Page here {category}</h1>
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
