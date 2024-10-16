import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Componente proveedor del contexto
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        const newQuantity = existingItem ? existingItem.quantity + quantity : quantity;

        // Verificar si se puede agregar la cantidad deseada
        if (newQuantity > item.stock) {
            alert(`Solo puedes agregar ${item.stock} unidades de ${item.name}.`);
            return; // No agregar si excede el stock
        }

        if (existingItem) {
            const updatedCart = cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: newQuantity }
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

    const increaseQuantity = (id) => {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            const newQuantity = existingItem.quantity + 1;

            // Verificar stock antes de aumentar la cantidad
            if (newQuantity > existingItem.stock) {
                alert(`Solo puedes tener ${existingItem.stock} unidades de ${existingItem.name}.`);
                return;
            }

            const updatedCart = cart.map(item =>
                item.id === id
                    ? { ...item, quantity: newQuantity }
                    : item
            );
            setCart(updatedCart);
        }
    };
    
    const decreaseQuantity = (id) => {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            if (existingItem.quantity > 1) {
                const updatedCart = cart.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
                setCart(updatedCart);
            } else {
                removeItem(id); // Elimina el artículo si la cantidad es 1
            }
        }
    };

    return (
        <CartContext.Provider value={{ 
            cart, 
            addItem, 
            removeItem, 
            clearCart, 
            isInCart, 
            increaseQuantity, 
            decreaseQuantity 
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;





