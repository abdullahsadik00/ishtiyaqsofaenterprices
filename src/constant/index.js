import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  sofaChair01,
  sofaChair1,
  sofaChair2,
  sofaChair3,
  sofabed1,
  sofabed10,
  sofabed2,
  sofabed3,
  sofabed4,
  sofabed6,
  sofabed7,
  sofabed8,
  sofabed9,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

// export const shoes = [
//   {
//     thumbnail: thumbnailShoe1,
//     bigShoe: bigShoe1,
//   },
//   {
//     thumbnail: thumbnailShoe2,
//     bigShoe: bigShoe2,
//   },
//   {
//     thumbnail: thumbnailShoe3,
//     bigShoe: bigShoe3,
//   },
// ];
export const sofaChair = [
  {
    thumbnail: sofaChair1,
  },
  {
    thumbnail: sofaChair2,
  },
  {
    thumbnail: sofaChair3,
  },
];

export const statistics = [
  { value: "1k+", label: "Happy Customer" },
  { value: "500+", label: "Shops" },
  // { value: "250k+", label: "Customers" },
];

export const products1 = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    img: [shoe4, shoe5, shoe6, shoe7],
  },
  {
    imgURL: sofaChair01,
    name: "Sofa Chair",
    price: "$200.20",
    img: [""],
  },
  {
    imgURL: sofabed1,
    name: "Sofa Bed",
    price: "$200.20",
    img: [sofabed1, sofabed2, sofabed3, sofabed4],
  },
  {
    imgURL: sofabed6,
    name: "Sofa Bed",
    price: "$200.20",
    img: [sofabed7, sofabed8, sofabed9, sofabed10],
  },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    imgURL: customer2,
    customerName: "Sadik Shaikh",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
