// import { useContext } from "react";
// import "./CartWidget.css";
// import { CartContext } from "../Context/CartContext";

// function CartWidget() {
  
//   const [cart] = useContext ((CartContext));
  
//     return (
//       <div className="cart">
        
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
//           <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
//         </svg>
//         <span>{cart.length}</span>
        
//     </div>
//     );
// }

// export default CartWidget;

// CartWidget.js
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart">
      <div className="cart-widget">
        <span>🛒</span>
        {totalItems > 0 && <span className="item-count">{totalItems}</span>}
      </div>
    </Link>
  );
};

export default CartWidget;
