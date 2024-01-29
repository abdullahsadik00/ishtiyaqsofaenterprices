import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 w-full rounded-md shadow-3xl px-10 py-16">
      <div className="flex justify-center items-center w-11 h-11 bg-bright-yellow rounded-full">
        <img src={imgURL} alt={label} width={30} height={30} />
      </div>
      <h3 className="mt-5 text-3xl font-bold font-palanquin leading-normal">
        {label}
      </h3>
      <p className="mt-3 text-lg font-montserrat leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
