// import React, { createContext, useState } from "react";
// import { getProducts } from "./services/ProductsService.js";

// export const CartContext = createContext();

// export function CartProvider(props) {
//   const [items, setItems] = useState([]);
//   const products = getProducts();

//   function getProduct(id) {
//     return products.find((product) => product.id === id);
//   }

//   function addItemToCart(id) {
//     const product = getProduct(id);

//     // Check if the item with the given id already exists in the cart
//     const existingItem = items.find((item) => item.id === id);

//     if (existingItem) {
//       // If the item already exists, update its quantity and total price
//       setItems((prevItems) =>
//         prevItems.map((item) => {
//           if (item.id === id) {
//             return {
//               ...item,
//               qty: item.qty + 1,
//               totalPrice: item.totalPrice + product.price,
//             };
//           } else {
//             return item;
//           }
//         })
//       );
//     } else {
//       // If the item does not exist, add it to the cart
//       setItems((prevItems) => [
//         ...prevItems,
//         {
//           id,
//           qty: 1,
//           product,
//           totalPrice: product.price,
//         },
//       ]);
//     }
//   }

//   function getItemsCount() {
//     return items.reduce((sum, item) => sum + item.qty, 0);
//   }

//   function getTotalPrice() {
//     return items.reduce((sum, item) => sum + item.totalPrice, 0);
//   }

//   return (
//     <CartContext.Provider
//       value={{ items, getItemsCount, addItemToCart, getTotalPrice }}
//     >
//       {props.children}
//     </CartContext.Provider>
//   );
// }
