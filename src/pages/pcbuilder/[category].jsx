import ProductCard from "../../components/UI/ProductCard";
import RootLayout from "../../components/layouts/RootLayout";
import React from "react";

const CategoryPage = ({ products }) => {
  const selectProduct = () => {
    console.log("first");
  };
  return (
    <section className="bg-slate-50 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Select Product
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Explore Our Collection of Fast and the Perfect Solution to Meet Your
            Computing Needs and Take Productivity to New Heights.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {products?.map((product) => (
            <ProductCard
              key={product?.id}
              product={product}
              selectProduct={selectProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps({ params }) {
  const { category } = params;
  const res = await fetch(`${process.env.BASE_URL}/api/category/${category}`);
  const products = await res.json();
  return { props: { products } };
}
