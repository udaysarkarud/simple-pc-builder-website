import ProductCard from "@/components/UI/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = ({ products }) => {
  const {
    query: { category },
  } = useRouter();

  /*   const { push } = useRouter();

  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <h1>
        <center>
          <span className="loading loading-bars loading-lg"></span>
        </center>
      </h1>
    );
  }

  if (status === "unauthenticated") {
    push("/login");
  } */
  return (
    <section className="bg-slate-50 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Discover Wide Range of{" "}
            {category.replace(/\w\S*/g, function (txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            })}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Explore Our Collection of Fast and the Perfect Solution to Meet Your
            Computing Needs and Take Productivity to New Heights.
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

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const res = await fetch(
    `https://simple-pc-builder-application-api.vercel.app/api/category`
  );
  const { data } = await res.json();

  const paths = data?.map((product) => ({
    params: { category: product.category },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://simple-pc-builder-application-api.vercel.app/api/category/${params.category}`
  );
  const products = await res.json();
  return { props: { products } };
}
