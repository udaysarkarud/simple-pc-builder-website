import { addToBuilder } from "@/redux/features/pcbuilderSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product, selectProduct }) => {
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
  const dispatch = useDispatch();
  const { push, query } = useRouter();

  const addproduct = () => {
    dispatch(
      addToBuilder({ component: product, componentName: query.category })
    );
    push("/pcbuilder");
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Link href={`/productdetails/${id}`}>
        <figure>
          <img src={image} />
        </figure>
      </Link>
      <div className="card-body">
        <div className="card-actions">
          <div className="badge badge-outline">{category}</div>
          <div
            className={`badge ${
              status == "In Stock" ? "badge-info" : "badge-error"
            }`}
          >
            {status}
          </div>
        </div>
        <h2 className="card-title">{productName}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-neutral" onClick={addproduct}>
            {selectProduct ? "Add To Builder" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
