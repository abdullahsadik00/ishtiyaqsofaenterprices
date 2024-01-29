import React from "react";

const Button = ({ children, data, fullWidth }) => {
  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border text-white bg-bright-orange font-montserrat text-lg leading-none
     rounded-full ${fullWidth && "w-full"}`}
      onClick={handleSubmit}
    >
      {children}
    </button>
  );
};

export default Button;
