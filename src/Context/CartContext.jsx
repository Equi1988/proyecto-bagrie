import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Componente proveedor del contexto
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            const updatedCart = cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + quantity }
                    : cartItem
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]); // Limpiar el carrito
    };

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
