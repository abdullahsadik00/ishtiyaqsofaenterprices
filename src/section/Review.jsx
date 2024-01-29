import React from "react";
import { reviews } from "../constant";
import ReviewCard from "../components/ReviewCard";

const Review = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold capitalize">
        What our <span className="text-bright-yellow">Customer Says?</span>
      </h3>
      <p className="info-text mx-auto text-center max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      {/* flex flex-1 justify-evenly items-center gap-14 flex-row  */}
      <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((el, i) => (
          <ReviewCard
            key={i}
            imgURL={el.imgURL}
            customerName={el.customerName}
            rating={el.rating}
            feedback={el.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default Review;
