import RootLayout from "@/components/layouts/RootLayout";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        404 Error!!
        <br />
        Your are at wrong page
      </h1>
    </div>
  );
};

export default ErrorPage;

ErrorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
