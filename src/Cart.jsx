import React from "react";
import ProductPage from "./section/ProductPage";

const Cart = ({ productImage, sofaChair }) => {
  return (
    <main>
      <section className="padding">
        <ProductPage productImage={productImage} sofaChair={sofaChair} />
      </section>
    </main>
  );
};

export default Cart;
