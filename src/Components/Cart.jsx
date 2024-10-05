// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'; // Importa los estilos

const Cart = () => {
    const { cartItems, removeItem } = useContext(CartContext);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Tu Carrito</h2>
            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>No hay ítems en tu carrito.</p>
                    <Link to="/" className="link-back">Volver a la tienda</Link>
                </div>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>Precio: ${item.price}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <div className="button-container-cart">
                                <button onClick={() => removeItem(item.id)} className='details-button-cart'>Eliminar</button>
                            </div>
                        </div>
                    ))}
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;

