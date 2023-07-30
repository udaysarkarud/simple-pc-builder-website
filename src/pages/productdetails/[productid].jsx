import ShowReview from "@/components/UI/ShowReview";
import RootLayout from "@/components/layouts/RootLayout";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ProductDetails = ({ product }) => {
  const {
    id,
    image,
    productName,
    category,
    status,
    price,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    reviews,
  } = product;

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={image}
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="pb-5 border-b-2 border-gray-200 mb-5">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productName}
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxe">{description}</p>

              <div className="flex items-center my-3">
                <p className="font-semibold mr-4">Custome Ratings:</p>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={averageRating}
                  readOnly
                />
              </div>
            </div>

            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${price}
              </span>

              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Button
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          <h3 className="mx-4 text-2xl mt-10 font-bold underline">
            What our customer says...
          </h3>
        </div>
        {/* testing */}

        {reviews?.map((review, id) => (
          <ShowReview key={id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/products");
  const { data } = await res.json();

  const paths = data?.map((product) => ({
    params: { productid: product.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/products/${params.productid}`
  );
  const product = await res.json();

  return { props: { product } };
}
