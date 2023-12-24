import React from "react";
import { products } from "../constant";
import ProductCard from "../components/ProductCard";

const PopularProduct = () => {
  return (
    <section id="PopularProduct" className="max-container">
      <div className="flex flex-col justify-start gap-4">
        <h2 className="text-4xl font-bold font-palanquin">
          Our <span className="text-bright-yellow"> Top Product</span>
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray ">
          {" "}
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-col-4">
          {products.map((product) => (
            <ProductCard
              imgURL={product.imgURL}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
