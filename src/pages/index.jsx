import RootLayout from "@/components/layouts/RootLayout";
import Hero from "@/components/shared/Hero";
import Products from "./products";
import shuffleProducts from "@/components/utils/shuffleproducts";
import TrustedBy from "@/components/shared/TrustedBy";

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
  const res = await fetch("http://localhost:3000/api/products");
  const { data } = await res.json();
  const afterShuffle = shuffleProducts(data);
  return { props: { data: afterShuffle } };
};
