import React, { useState } from "react";

import ChairCard from "../components/ChairCard";
import Button from "../components/Button";
import { sofaChair } from "../constant";
import { sofaChair1 } from "../assets/images";

const ProductPage = () => {
  const [productImage, setProductImage] = useState(sofaChair1);
  return (
    <section className="max-container w-full flex flex-col justify-center min-h-screen gap-10 lg:flex-row">
      {/* Product Image */}
      <div className="flex flex-col relative justify-center item-center w-full xl:w-1/2">
        <div className="shadow-2xl rounded-md mb-4 ">
          <img
            src={productImage}
            alt=""
            width={610}
            height={502}
            className="object-contain "
          />
        </div>
        <div>
          <div className="flex gap-4 justify-center items-center">
            {sofaChair.map((image, index) => (
              <div key={index}>
                <ChairCard
                  imgURL={image}
                  bigChairImg={productImage}
                  handleBigChair={setProductImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Product Description */}
      <div className="felx flex-col justify-start items-start padding w-full xl:w-1/2">
        <h2 className="font-palanquin text-4xl capitalize sm:text-[72px] sm:leading-[82px] font-bold">
          heading
        </h2>
        <p className="text-lg leading-8 mt-6 mb-14 text-slate-gray font-montserrat">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          dignissimos, obcaecati velit officia ratione quidem perferendis ipsum
          architecto quibusdam enim explicabo beatae sit quae?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quam,
          harum fugit laboriosam sed distinctio cupiditate cum aliquid facere
          quae. <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque at
          error nostrum ullam impedit explicabo voluptas labore, illo dicta
          eaque tempora rem, facere totam quos vero sequi! Officiis, sapiente
          aspernatur.
        </p>
        <Button>Buy Now</Button>
      </div>
    </section>
  );
};

export default ProductPage;
