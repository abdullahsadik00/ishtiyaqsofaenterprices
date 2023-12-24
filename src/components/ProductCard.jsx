import React from "react";

const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col w-full">
      <img src={imgURL} alt={name} width={300} height={300} />
      <div className="flex justify-center items-center gap-5">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h3 className="font-semibold leading-normal text-2xl font-palanquin">
            {name}
          </h3>
          <p className="text-xl leading-normal font-montserrat text-bright-orange">
            {price}
          </p>
          <button className="font-montserat  text-lg text-white bg-bright-orange px-5 py-3 leading-none rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
