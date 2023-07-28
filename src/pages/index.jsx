import RootLayout from "@/components/layouts/RootLayout";
import CustomerReview from "@/components/shared/CustomerReview";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CustomerReview />
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
