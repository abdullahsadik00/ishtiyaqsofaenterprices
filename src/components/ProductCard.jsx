import React, { useState } from "react";
import Button from "./Button";
import { sofaChair1 } from "../assets/images";
import { sofaChair } from "../constant";
import ChairCard from "../components/ChairCard";

const ProductCard = ({ imgURL, name, price }) => {
  const data = { name, price };
  const [showDetail, setShowDetail] = useState(false);
  const [productImage, setProductImage] = useState(sofaChair1);

  return (
    <div className="flex flex-col w-full">
      <img src={imgURL} alt={name} width={300} height={300} />
      <div className="flex justify-center items-center gap-5">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h3 className="font-semibold leading-normal text-2xl font-palanquin">
            {name}
          </h3>
          <p className="text-xl leading-normal font-montserrat text-bright-orange">
            {price}
          </p>
          <div
            className="border border-b-red-900 p-6 rounded-md"
            onClick={() => {
              setShowDetail((value) => !value);
              console.log(showDetail);
            }}
          >
            hellow world
          </div>
          {showDetail ? (
            <section className="max-container w-full flex flex-col justify-center min-h-screen gap-10 lg:flex-row fixed inset-0 z-50">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/* Content */}
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
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Labore dignissimos, obcaecati velit officia ratione quidem
                      perferendis ipsum architecto quibusdam enim explicabo
                      beatae sit quae?
                      <br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sit quam, harum fugit laboriosam sed distinctio cupiditate
                      cum aliquid facere quae. <br />
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Atque at error nostrum ullam impedit explicabo voluptas
                      labore, illo dicta eaque tempora rem, facere totam quos
                      vero sequi! Officiis, sapiente aspernatur.
                    </p>
                    <Button>Buy Now</Button>
                  </div>
                </section>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </div>
            </section>
          ) : null}
          <Button data={data}> Add to Cart</Button>
        </div>
      </div>
      {/* <img src={imgURL} alt={name} width={300} height={300} />
      <div className="flex justify-center items-center gap-5">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h3 className="font-semibold leading-normal text-2xl font-palanquin">
            {name}
          </h3>
          <p className="text-xl leading-normal font-montserrat text-bright-orange">
            {price}
          </p>
          <div
            className="border border-b-red-900 p-6 rounded-md"
            onClick={() => {
              setShowDetail((value) => !value);
              console.log(showDetail);
            }}
          >
            hellow world
          </div>
          {showDetail ? <p>It is true</p> : <p>It is false</p>}
          <Button data={data}> Add to Cart</Button>
        </div>
      </div> */}
      {/*  */}
      <>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open regular modal
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Modal Title</h3>
                    <button
                      className="p-1 ml-auto bg-red border-4 text-black opacity-5 float-right text-3xl leading-none font-semibold "
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-red text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves! They're slowed down by their perception of
                      themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
      {/*  */}
    </div>
  );
};

export default ProductCard;
