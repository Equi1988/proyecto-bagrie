// import React, { createContext, useState } from 'react';


// export const CartContext = createContext();


// const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addItem = (item, quantity) => {
//         const existingItem = cart.find(cartItem => cartItem.id === item.id);
//         const newQuantity = existingItem ? existingItem.quantity + quantity : quantity;

        
//         if (newQuantity > item.stock) {
//             alert(`Solo puedes agregar ${item.stock} unidades de ${item.title}.`);
//             return;
//         }

//         if (existingItem) {
//             const updatedCart = cart.map(cartItem =>
//                 cartItem.id === item.id
//                     ? { ...cartItem, quantity: newQuantity }
//                     : cartItem
//             );
//             setCart(updatedCart);
//         } else {
//             setCart([...cart, { ...item, quantity }]);
//         }
//     };

//     const removeItem = (id) => {
//         setCart(cart.filter(item => item.id !== id));
//     };

//     const clearCart = () => {
//         setCart([]); 
//     };

//     const isInCart = (id) => {
//         return cart.some(item => item.id === id);
//     };

//     const increaseQuantity = (id) => {
//         const existingItem = cart.find(item => item.id === id);
//         if (existingItem) {
//             const newQuantity = existingItem.quantity + 1;

            
//             if (newQuantity > existingItem.stock) {
//                 alert(`Solo puedes tener ${existingItem.stock} unidades de ${existingItem.name}.`);
//                 return;
//             }

//             const updatedCart = cart.map(item =>
//                 item.id === id
//                     ? { ...item, quantity: newQuantity }
//                     : item
//             );
//             setCart(updatedCart);
//         }
//     };
    
//     const decreaseQuantity = (id) => {
//         const existingItem = cart.find(item => item.id === id);
//         if (existingItem) {
//             if (existingItem.quantity > 1) {
//                 const updatedCart = cart.map(item =>
//                     item.id === id
//                         ? { ...item, quantity: item.quantity - 1 }
//                         : item
//                 );
//                 setCart(updatedCart);
//             } else {
//                 removeItem(id); 
//             }
//         }
//     };

//     return (
//         <CartContext.Provider value={{ 
//             cart, 
//             addItem, 
//             removeItem, 
//             clearCart, 
//             isInCart, 
//             increaseQuantity, 
//             decreaseQuantity 
//         }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export default CartProvider;

// src/context/CartContext.js
import React, { createContext, useState } from 'react';
import Alert from '../components/Alert'; // Asegúrate de que la ruta sea correcta

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const showAlertMessage = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Oculta después de 3 segundos
    };

    const addItem = (item, quantity) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        const newQuantity = existingItem ? existingItem.quantity + quantity : quantity;

        if (newQuantity > item.stock) {
            showAlertMessage(`Solo puedes agregar ${item.stock} unidades de ${item.name}.`);
            return; 
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
        setCart([]); 
    };

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    const increaseQuantity = (id) => {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            const newQuantity = existingItem.quantity + 1;

            if (newQuantity > existingItem.stock) {
                showAlertMessage(`Solo puedes tener ${existingItem.stock} unidades de ${existingItem.title}.`);
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
                removeItem(id); 
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
            {showAlert && <Alert message={alertMessage} onClose={() => setShowAlert(false)} />}
        </CartContext.Provider>
    );
};

export default CartProvider;




