import React from "react";
import { chair1 } from "../assets/images";
import Button from "../components/Button";

const Quality = () => {
  return (
    <section className="flex xl:flex-row flex-col justify-between items-center  gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold">
          We provide you with best
          <span className="text-bright-yellow"> Repairing services</span>
        </h2>
        <p className="mt-3 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-6">
          <Button>View Details</Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={chair1}
          alt="repair"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Quality;
