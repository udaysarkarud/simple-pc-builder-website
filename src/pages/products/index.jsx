import ProductCard from "../../components/UI/ProductCard";
import RootLayout from "../../components/layouts/RootLayout";
import React from "react";

const Products = ({ products }) => {
  return (
    <section className="bg-slate-50 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Our Featured Products Loved by All.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our Featured Products Collection. Handpicked with care, these
            top-notch items cater to your every need and passion. Elevate your
            lifestyle with the latest trends.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
