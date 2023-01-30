































// React-Shopping Card
// Index.js  ______________________________________________________________________

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// // App.js  ______________________________________________________________________

// import React from "react";
// import Cart from "./component/Cart";

// const App = () => {
//   return (
//     <>
//       <Cart />
//     </>
//   );
// };

// export default App;

// // Card.js  ______________________________________________________________________

// import React, { createContext, useReducer, useEffect } from "react";
// import "./cart.css";
// import { products } from "./products";
// import ContextCart from "./ContextCart";
// import { reducer } from "./reducer";

// export const CartContext = createContext();

// const initialState = {
//   item: products,
//   totalAmount: 0,
//   totalItem: 0,
// };

// const Cart = () => {
//   // const [item, setItem] = useState(products);
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // to delete the indv. elements from an Item Cart
//   const removeItem = (id) => {
//     return dispatch({
//       type: "REMOVE_ITEM",
//       payload: id,
//     })};

//   // clear the cart
//   const clearCart = () => {
//     return dispatch({ type: "CLEAR_CART" });
//   };

//   // increment the item
//   const increment = (id) => {
//     return dispatch({
//       type: "INCREMENT",
//       payload: id,
//     });
//   };

//   // decrement the item
//   const decrement = (id) => {
//     return dispatch({
//       type: "DECREMENT",
//       payload: id,
//     })};

//   // we will use the useEffect to update the data
//   useEffect(() => {
//     dispatch({ type: "GET_TOTAL" });
//     // console.log("Awesome");
//   }, [state.item]);

//   return (
//     <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
//       <ContextCart />
//     </CartContext.Provider>
//   );
// };
// export default Cart;
// // ContextCart.js  _________________________________________________________________

// import React, { useContext } from "react";
// import { Scrollbars } from "react-custom-scrollbars-2";
// import Items from "./Items";
// import { CartContext } from "./Cart";
// import Navbar from "./Navbar";

// const ContextCart = () => {
//   const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

//   if (item.length === 0) {
//     return (
//       <>
//         <Navbar />
//         <section className="main-cart-section">
//           <h1>shopping Cart</h1>
//           <p className="total-items">
//             you have <span className="total-items-count">{totalItem} </span>
//             items in shopping cart
//           </p>
//         </section>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <section className="main-cart-section">
//         <h1>shopping Cart</h1>
//         <p className="total-items">
//           you have <span className="total-items-count">{totalItem} </span>
//           items in shopping cart
//         </p>

//         <div className="cart-items">
//           <div className="cart-items-container">
//             <Scrollbars>
//               {item.map((curItem) => {
//                 return <Items key={curItem.id} {...curItem} />;
//               })}
//             </Scrollbars>
//           </div>
//         </div>

//         <div className="card-total">
//           <h3>
//             Cart Total : <span>{totalAmount}₹</span>
//           </h3>
//           <button>checkout</button>
//           <button className="clear-cart" onClick={clearCart}>
//             Clear Cart
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ContextCart;
// // reducer.js  ______________________________________________________________________

// export const reducer = (state, action) => {
//   if (action.type === "REMOVE_ITEM") {
//     return {
//       ...state,
//       item: state.item.filter((curElem) => {
//         return curElem.id !== action.payload;
//       }),
//     };
//   }

//   if (action.type === "CLEAR_CART") {
//     return { ...state, item: [] };
//   }

//   if (action.type === "INCREMENT") {
//     const updatedCart = state.item.map((curElem) => {
//       if (curElem.id === action.payload) {
//         return { ...curElem, quantity: curElem.quantity + 1 };
//       }
//       return curElem;
//     });

//     return { ...state, item: updatedCart };
//   }

//   if (action.type === "DECREMENT") {
//     const updatedCart = state.item
//       .map((curElem) => {
//         if (curElem.id === action.payload) {
//           return { ...curElem, quantity: curElem.quantity - 1 };
//         }
//         return curElem;
//       })
//       .filter((curElem) => curElem.quantity !== 0);

//     return { ...state, item: updatedCart };
//   }

//   if (action.type === "GET_TOTAL") {
//     let { totalItem, totalAmount } = state.item.reduce(
//       (accum, curVal) => {
//         let { price, quantity } = curVal;

//         let updatedTotalAmount = price * quantity;
//         accum.totalAmount += updatedTotalAmount;

//         accum.totalItem += quantity;
//         return accum;
//       },
//       {
//         totalItem: 0,
//         totalAmount: 0,
//       }
//     );
//     return { ...state, totalItem, totalAmount };
//   }

//   return state;
// };
// // Navbar.js  ______________________________________________________________________

// import React, { useContext } from "react";
// import { CartContext } from "./Cart";

// const Navbar = () => {
//   const { totalItem } = useContext(CartContext);
//   return (
//     <>
//       <header>
//         <div className="continue-shopping">
//           <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
//           <h3>continue shoping</h3>
//         </div>

//         <div className="cart-icon">
//           <img src="./images/cart.png" alt="cart-logo" />
//           <p>{totalItem}</p>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;

// // Items.js  ______________________________________________________________________

// import React, { useContext } from "react";
// import { CartContext } from "./Cart";

// const Items = ({ id, description, title, img, price, quantity }) => {
//   const { removeItem, increment, decrement } = useContext(CartContext);

//   return (
//     <>
//       <div className="items-info">
//         <div className="product-img">
//           <img src={img} alt="iamge" />
//         </div>

//         <div className="title">
//           <h2>{title}</h2>
//           <p>{description}</p>
//         </div>

//         <div className="add-minus-quantity">
//           <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
//           <input type="text" placeholder={quantity} disabled />
//           <i className="fas fa-plus add" onClick={() => increment(id)}></i>
//         </div>

//         <div className="price">
//           <h3>{price}₹</h3>
//         </div>

//         <div className="remove-item">
//           <i className="fas fa-trash-alt remove" onClick={() => removeItem(id)}></i>
//         </div>
//       </div>
//       <hr />
//     </>
//   );
// };

// export default Items;

// // Products.js ______________________________________________________________________

// export const products = [
//   {
//     id: 1,
//     title: "Samsung S21",
//     description: "black in color",
//     price: "2500",
//     img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
//   {
//     id: 2,
//     title: "Samsung M21",
//     description: "white in color",
//     price: "2300",
//     img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
//   {
//     id: 3,
//     title: "Redmi 9",
//     description: "black in color",
//     price: "3500",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
//     quantity: 1,
//   },
//   {
//     id: 4,
//     title: "Iphone 12",
//     description: "Best mobile ever",
//     price: "90500",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
//     quantity: 1,
//   },
//   {
//     id: 5,
//     title: "Samsung S21",
//     description: "black in color",
//     price: "2500",
//     img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     quantity: 1,
//   },
//   {
//     id: 6,
//     title: "Redmi 9",
//     description: "black in color",
//     price: "3500",
//     img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
//     quantity: 1,
//   }, 
// ];

// // Cart.css  ______________________________________________________________________

// /* @import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200&display=swap");

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: Mulish;
// }

// html {
//   font-size: 55.5%;
// }

// :root {
//   --main-color: #333;
//   --primary-color: #acacac;
//   --icon-color: #525252;
// }

// i {
//   width: 2rem;
//   height: 2rem;
// }

// .fa,
// .fas {
//   font-weight: 900;
//   display: grid;
//   place-items: center;
//   font-size: 1.6rem;
//   cursor: pointer;
// }

// body {
//   width: 80%;
//   height: 100vh;
//   margin: auto;
// }

// header {
//   width: 100%;
//   line-height: 10rem;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   border-bottom: 0.1rem solid #9a9191;
//   transform: rotate(-0.05deg);
//   margin-bottom: 7rem;
// }

// .continue-shopping {
//   display: flex;
//   height: inherit;
//   align-items: center;
// }

// .continue-shopping .arrow-icon {
//   width: 2.2rem;
//   height: 2.2rem;
// }

// .continue-shopping h3 {
//   font-size: 2rem;
//   text-transform: capitalize;
//   color: var(--main-color);
//   margin-left: 1.5rem;
//   font-weight: 400;
// }

// .cart-icon {
//   display: flex;
//   text-align: end;
//   margin-right: 2rem;
//   align-items: center;
//   position: relative;
//   justify-content: flex-end;
// }

// .cart-icon img {
//   width: 5rem;
//   height: 5rem;
//   color: #2f80ed;
// }

// .cart-icon p {
//   position: absolute;
//   width: 4rem;
//   height: 4rem;
//   right: -1.2rem;
//   top: 0.9rem;
//   border-radius: 50%;
//   background: #99cbf7;
//   color: #fff;
//   box-sizing: border-box;
//   font-size: 1.6rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: var(--main-color);
// }

// .main-cart-section h1 {
//   font-style: normal;
//   font-weight: bold;
//   font-size: 3rem;
//   text-transform: capitalize;
//   color: rgba(41, 41, 41, 1);
//   margin-bottom: 1rem;
// }

// .main-cart-section .total-items {
//   font-style: normal;
//   font-weight: normal;
//   font-size: 1.8rem;
//   text-transform: capitalize;
//   color: var(--main-color);
//   margin-bottom: 5rem;
// }

// .total-items-count {
//   font-weight: bold;
//   color: var(--main-color);
// }

// /* cart main div start  

// .main-cart-section .cart-items {
//   width: 100%;
//   height: 62rem;
//   background: linear-gradient(
//     103.49deg,
//     #ffffff -28.13%,
//     rgba(242, 247, 255, 0.5) 116.84%
//   );
//   box-shadow: rgba(0, 0, 0, 0.08) 0rem 0.4rem 1.2rem;
//   border-radius: 2rem;
//   margin: auto;
//   margin: auto;
//   display: grid;
//   place-items: center;
// }

// .cart-items hr {
//   margin: 2rem auto;
//   overflow-y: scroll;
// }

// .cart-items-container {
//   width: 90%;
//   height: 56rem;
// }

// .items-info {
//   width: 100%;
//   height: 11rem;
//   /* background-color: lavender; 
//   margin: auto;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
// }

// .items-info .product-img img {
//   width: 16rem;
//   height: 11rem;
//   filter: drop-shadow(0rem 0.4rem 1rem #f1f7ff);
//   border-radius: 1rem;
// }

// .items-info .title {
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// }

// .items-info .title h2 {
//   font-style: normal;
//   font-weight: bold;
//   font-size: 2.2rem;
//   display: flex;
//   align-items: center;
//   text-transform: capitalize;
//   color: var(--main-color);
// }

// .items-info .title p {
//   font-style: normal;
//   font-weight: normal;
//   font-size: 1.8rem;
//   display: flex;
//   align-items: center;
//   text-transform: capitalize;
//   text-align: left;
//   color: var(--primary-color);
// }

// .add-minus-quantity {
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
// }

// .add-minus-quantity button {
//   border: none;
//   background-color: transparent;
//   outline: none;
//   cursor: pointer;
// }

// .add-minus-quantity input {
//   width: 6rem;
//   height: 3rem;
//   border: 0.141rem solid var(--primary-color);
//   box-sizing: border-box;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 1.6rem;
//   text-align: center;
//   text-transform: capitalize;
//   color: var(--primary-color);
//   margin: 0 1rem;
//   border-radius: 0.5rem;
//   outline: none;
//   background-color: transparent;
// }

// .add-minus-quantity input:focus {
//   outline: none;
// }

// .price {
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
// }

// .price h3 {
//   font-style: normal;
//   font-weight: bold;
//   font-size: 2rem;
//   text-transform: capitalize;
//   color: var(--main-color);
// }

// .remove-item {
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   margin-right: 5rem;
// }

// .remove-item button {
//   border: none;
//   background-color: transparent;
// }

// .card-total {
//   width: 95%;
//   margin-top: 4rem;
//   text-align: right;
// }

// .card-total h3 {
//   font-style: 200;
//   font-size: 2.58rem;
//   line-height: 3.2rem;
//   text-transform: capitalize;
//   color: #606166;
// }

// .card-total h3 span {
//   font-style: normal;
//   font-weight: bold;
//   font-size: 2.8rem;
//   line-height: 3.2rem;
//   text-transform: capitalize;
//   color: #000000;
//   margin-left: 1rem;
// }

// .card-total button {
//   border: none;
//   font-size: 1.6rem;
//   padding: 1rem 3rem;
//   color: #fff;
//   background-color: #349bf3;
//   text-transform: uppercase;
//   margin-top: 1rem;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   letter-spacing: 1px;
// }

// /* hover effects  
// .fa-trash-alt {
//   color: #ed4848;
// }

// .fa-plus:hover {
//   color: #42c157;
// }

// .fa-minus:hover {
//   color: #ffb800;
// }

// .fa-plus,
// .fa-minus {
//   color: var(--icon-color);
// }

// .card-total button:hover {
//   background-color: #0077dc;
// }

// .card-total .clear-cart {
//   margin-left: 3rem;
//   background-color: rgb(209, 61, 61);
// }

// .card-total .clear-cart:hover {
//   background-color: rgb(197, 5, 5);
// }

// /* responsive media queries  

// @media (max-width: 968px) {
//   html {
//     font-size: 50%;
//   }
// }

// @media (max-width: 768px) {
//   .continue-shopping h3 {
//     margin-left: 0;
//     font-size: 1.85rem;
//   }

//   .items-info {
//     width: 100%;
//     height: auto;
//     display: grid;
//     grid-template-columns: 1fr;
//   }

//   .title,
//   .add-minus-quantity,
//   .price,
//   .remove-item {
//     padding-left: 2rem;
//   }

//   .items-info .product-img {
//     width: 100%;
//     text-align: center;
//     margin-bottom: 2rem;
//   }

//   .add-minus-quantity {
//     margin: 2rem 0 2rem 0;
//     justify-content: flex-start;
//   }

//   .price {
//     justify-content: flex-start;
//     margin-bottom: 2rem;
//   }

//   .price h3::before {
//     content: "Price: ";
//   }

//   .remove-item {
//     justify-content: flex-start;
//   }

//   .card-total {
//     margin-bottom: 2rem;
//     text-align: center;
//   }

//   .card-total button {
//     margin-bottom: 3rem;
//   }
// } */
