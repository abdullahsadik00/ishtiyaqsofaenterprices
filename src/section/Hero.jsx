import React, { useState } from "react";
import { chair1 } from "../assets/images";
import { shoes } from "../constant";
import ChairCard from "../components/ChairCard";
const Hero = () => {
  console.log(shoes);
  const [bigChairImg, setBigChairImg] = useState(chair1);
  return (
    <section
      id="home"
      className="w-full max-container  flex flex-col justify-center min-h-screen gap-10 lg:flex-row"
    >
      <div className="relative flex flex-col justify-center items-center pt-28 xl:w-1/2 max-xl:padding-x ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize sm:text-[72px] sm:leading-[82px] font-bold">
          Make life easier with comfortable furnitures and
          <span className="text-bright-orange inline-block">
            {" "}
            modest design
          </span>
        </h2>
        <p className="text-lg leading-8 mt-6 mb-14 text-slate-gray font-montserrat">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae eaque
          magnam placeat adipisci sit illum.
        </p>
      </div>
      <div className="relative flex flex-1 justify-center items-center bg-center bg-cover bg-hero xl:min-h-screen max-xl:py-40 ">
        <img
          src={bigChairImg}
          alt="chair"
          width={610}
          height={502}
          className="object-contain "
        />
        <div className="flex gap-4 absolute -bottom-[5%]">
          {shoes.map((image, index) => (
            <div key={index}>
              <ChairCard
                bigChairImg={bigChairImg}
                handleBigChair={setBigChairImg}
                imgURL={image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
