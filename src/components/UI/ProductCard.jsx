import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
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
          <button className="btn btn-neutral">Buy Now (${price})</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
