import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constant";

const Services = () => {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9">
      {services.map((el) => (
        <ServiceCard
          key={el.label}
          imgURL={el.imgURL}
          label={el.label}
          subtext={el.subtext}
        />
      ))}
    </div>
  );
};

export default Services;
