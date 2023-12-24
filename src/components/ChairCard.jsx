import React from "react";

const ChairCard = ({ bigChairImg, handleBigChair, imgURL }) => {
  const handleClick = () => {
    if (bigChairImg !== imgURL.thumbnail) handleBigChair(imgURL.thumbnail);
  };
  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-xl ${
        bigChairImg === imgURL.thumbnail
          ? "border-bright-orange"
          : "border-transparent"
      } cursor-pointer`}
    >
      <div className="flex justify-center items-center bg-cover bg-card bg-center rounded-xl">
        <img
          src={imgURL.thumbnail}
          alt=""
          width={130}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ChairCard;
