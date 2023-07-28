import RootLayout from "@/components/layouts/RootLayout";
import CustomerReview from "@/components/shared/CustomerReview";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Products from "./products";

export default function HomePage({ data }) {
  return (
    <main>
      <Hero />
      <Products products={data} />
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const { data } = await res.json();
  return { props: { data } };
};
