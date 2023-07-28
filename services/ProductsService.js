const PRODUCTS = [
  {
    id: 1,
    name: "Apple iPhone 13 Pro Max",
    price: 389,
    image: require("../assets/product_images/phone.jpeg"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    name: "PNY GeForce GTX 1060 6GB",
    price: 79,
    image: require("../assets/product_images/graphics.jpeg"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    name: "Acer Predator Triton",
    price: 979,
    image: require("../assets/product_images/laptop.jpg"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export function getProducts() {
  return PRODUCTS;
}
