import { createContext, useState } from "react";
export const CartContext = createContext(false);

export function CartProvider({children}){


    const [cart, setCart] = useState ([]);

    const addItem = (Item) => {
        const existingItem = cart.find(cartItem => cartItem.id === Item.id)
        if (existingItem) {
            // Si ya existe, podrías incrementar la cantidad en lugar de duplicar
            existingItem.quantity += 1;
            setCart([...cart]); // Actualiza el estado
        } else {
            // Si no existe, agregarlo al carrito con una cantidad inicial de 1
            setCart([...cart, { ...Item, quantity: 3 }]);
        }
    };

        // Remover un artículo del carrito
        const removeItem = (id) => {
            setCart(cart.filter(Item => Item.id !== id));
        };
    
        // Verificar si un artículo está en el carrito
        const isInCart = (id) => {
            return cart.some(Item => Item.id === id);
        };

    return(

        <CartContext.Provider value ={[cart, setCart, addItem, removeItem, isInCart]}>
        
        {children}

        </CartContext.Provider>
    )
    



}