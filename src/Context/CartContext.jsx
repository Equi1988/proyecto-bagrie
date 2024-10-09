// 

// CartContext.jsx
// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);

//     const addItem = (item) => {
//         setCartItems(prevItems => {
//             const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
//             if (existingItem) {
//                 return prevItems.map(cartItem =>
//                     cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//                 );
//             }
//             return [...prevItems, { ...item, quantity: 1 }];
//         });
//     };

//     const removeItem = (itemId) => {
//         setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
//     };

//     const isInCart = (itemId) => {
//         return cartItems.some(item => item.id === itemId);
//     };

//     return (
//         <CartContext.Provider value={{ cartItems, addItem, removeItem, isInCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addItem = (product, quantity) => {
//         const existingProduct = cart.find(item => item.id === product.id);
//         if (existingProduct) {
//             // Si el producto ya existe en el carrito, aumenta la cantidad
//             existingProduct.quantity += quantity;
//             setCart([...cart]);
//         } else {
//             // Si no existe, agrega el nuevo producto con la cantidad
//             setCart([...cart, { ...product, quantity }]);
//         }
//     };

//     const removeItem = (productId) => {
//         setCart(cart.filter(item => item.id !== productId));
//     };

//     const isInCart = (productId) => {
//         return cart.some(item => item.id === productId);
//     };

//     return (
//         <CartContext.Provider value={{ cart, addItem, removeItem, isInCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addItem = (product, quantity) => {
//         const existingProduct = cart.find(item => item.id === product.id);
//         if (existingProduct) {
//             existingProduct.quantity += quantity;
//             setCart([...cart]);
//         } else {
//             setCart([...cart, { ...product, quantity }]);
//         }
//     };

//     const removeItem = (productId) => {
//         setCart(cart.filter(item => item.id !== productId));
//     };

//     const isInCart = (productId) => {
//         return cart.some(item => item.id === productId);
//     };

//     return (
//         <CartContext.Provider value={{ cart, addItem, removeItem, isInCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (product, quantity) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    const removeItem = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
            setCart([...cart]);
        }
    };

    const decreaseQuantity = (productId) => {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct && existingProduct.quantity > 1) {
            existingProduct.quantity -= 1;
            setCart([...cart]);
        } else if (existingProduct) {
            removeItem(productId); // Remover si la cantidad es 1
        }
    };

    const isInCart = (productId) => {
        return cart.some(item => item.id === productId);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, increaseQuantity, decreaseQuantity, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};
