import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to="/cart">
            <div className="cart-widget">   
                <span role="img" aria-label="cart">🛒</span>
                {totalItems > 0 && (
                    <span className="item-count">{totalItems}</span> // Mostrar cantidad aquí
                )}
            </div>
        </Link>
    );
};

export default CartWidget;

