// import React, { useContext } from 'react';
// import { CartContext } from '../Context/CartContext';
// import { Link } from 'react-router-dom';
// import './Cart.css'; // 

// const Cart = () => {
//     const { cartItems, removeItem } = useContext(CartContext);
//     const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


//     return (
//         <div className="cart-container">
//             <h2>Tu Carrito</h2>
//             {cartItems.length === 0 ? (
//                 <div className="cart-empty">
//                     <p>No hay ítems en tu carrito.</p>
//                     <Link to="/" className="link-back">Volver a la tienda</Link>
//                 </div>
//             ) : (
//                 <div>
//                     {cartItems.map(item => (
//                         <div key={item.id} className="cart-item">
//                             <img src={item.image} alt={item.title} />
//                             <h3>{item.title}</h3>
//                             <p>Precio: ${item.price}</p>
//                             <p>Cantidad: {item.quantity}</p>
//                             <div className="button-container-cart">
//                                 <button onClick={() => removeItem(item.id)} className='details-button-cart'>Eliminar</button>
//                             </div>
//                         </div>
//                     ))}
//                     <h3>Total: ${totalPrice.toFixed(2)}</h3>
//                     <button className='details-button-cart'> <Link to="/" className='link-finish'>Finalizar Compra</Link></button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Cart;

// import React, { useContext } from 'react';
// import { CartContext } from '../Context/CartContext';
// import { Link } from 'react-router-dom';
// import './Cart.css';

// const Cart = () => {
//     const { cart, removeItem } = useContext(CartContext); // Cambiar a cart
//     const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//     return (
//         <div className="cart-container">
//             <h2>Tu Carrito</h2>
//             {cart.length === 0 ? ( // Cambiar a cart
//                 <div className="cart-empty">
//                     <p>No hay ítems en tu carrito.</p>
//                     <Link to="/" className="link-back">Volver a la tienda</Link>
//                 </div>
//             ) : (
//                 <div>
//                     {cart.map(item => (
//                         <div key={item.id} className="cart-item">
//                             <img src={item.image} alt={item.title} />
//                             <h3>{item.title}</h3>
//                             <p>Precio: ${item.price}</p>
//                             <p>Cantidad: {item.quantity}</p>
//                             <div className="button-container-cart">
//                                 <button onClick={() => removeItem(item.id)} className='details-button-cart'>Eliminar</button>
//                             </div>
//                         </div>
//                     ))}
//                     <h3>Total: ${totalPrice.toFixed(2)}</h3>
//                     <button className='details-button-cart'> 
//                         <Link to="/" className='link-finish'>Finalizar Compra</Link>
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Cart;
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, removeItem, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <div className="cart-empty">
                    <p>No hay ítems en tu carrito.</p>
                    <Link to="/" className="link-back">Volver a la tienda</Link>
                </div>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>Precio: ${item.price}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Stock disponible: {item.stock}</p> {/* Muestra el stock aquí */}
                            <div className="quantity-controls">
                                <button onClick={() => decreaseQuantity(item.id)} className='quantity-button'>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)} className='quantity-button'>+</button>
                            </div>
                            <div className="button-container-cart">
                                <button onClick={() => removeItem(item.id)} className='details-button-cart'>Eliminar</button>
                            </div>
                        </div>
                    ))}
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                    <button className='details-button-cart'> 
                        <Link to="/" className='link-finish'>Finalizar Compra</Link>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
    
