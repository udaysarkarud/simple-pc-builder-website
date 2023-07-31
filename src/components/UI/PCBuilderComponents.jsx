import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const PCBuilderComponents = ({ data }) => {
  const { push } = useRouter();
  const { pcomponents } = useSelector((state) => state.pcbuilder);

  const selectProduct = () => {
    push(`/pcbuilder/${data.slug}`);
  };

  console.log();

  return (
    <>
      <div className="flex justify-between items-center bg-slate-100 p-4 m-4 rounded">
        <img src={data.img} alt="" />
        {pcomponents[data.slug] && (
          <div className="text-left flex justify-between items-center">
            <div className="mr-2">
              <img src={pcomponents[data.slug].image} alt="" width={120} />
            </div>
            <div>
              <p>Id: {pcomponents[data.slug].id}</p>
              <p>Product Name: {pcomponents[data.slug].productName}</p>
              <p>Price: {pcomponents[data.slug].price}</p>
            </div>
          </div>
        )}
        <div>
          <p>{data.name}</p>
        </div>

        <button className="btn btn-neutral" onClick={selectProduct}>
          Select
        </button>
      </div>
    </>
  );
};

export default PCBuilderComponents;
