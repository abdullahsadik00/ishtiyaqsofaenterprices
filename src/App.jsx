import { useState } from "react";
import Nav from "./section/Nav";
import Hero from "./section/Hero";
import PopularProduct from "./section/PopularProduct";
import Quality from "./section/Quality";
import Services from "./section/Services";
import Offer from "./section/Offer";
import Review from "./section/Review";
import Subscribe from "./section/Subscribe";
import Footer from "./section/Footer";
import ProductPage from "./section/ProductPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative">
      <Nav />
      <section className="padding-l padding-r  bg-light-orange">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <Quality />
      </section>
      <section className="padding-x py-10">
        <Services />{" "}
      </section>
      <section className="padding">
        <Offer />
      </section>
      <section className="padding bg-pale-blue">
        <Review />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
      <section className="padding">
        <ProductPage />
      </section>
    </main>
  );
}

export default App;
