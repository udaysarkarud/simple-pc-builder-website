import RootLayout from "../components/layouts/RootLayout";
import Hero from "../components/shared/Hero";
import shuffleProducts from "../components/utils/shuffleproducts";
import TrustedBy from "../components/shared/TrustedBy";
import Products from "./products";

export default function HomePage({ data }) {
  return (
    <main>
      <Hero />
      <Products products={data} />
      <TrustedBy />
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  if (typeof window === "undefined") {
    return { props: { data: [] } };
  }
  const res = await fetch(`${process.env.BASE_URL}/api/products`);
  const { data } = await res.json();
  const afterShuffle = shuffleProducts(data);
  return { props: { data: afterShuffle } };
};
