import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCard.css';

export default function ProductCard({ product }) {
    const { addItem, removeItem, isInCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate(); // Hook para la navegación

    const handleAdd = () => {
        if (product.stock >= quantity) {
            addItem(product, quantity);
        } else {
            alert("No hay suficiente stock disponible");
        }
    };

    const handleDetailsClick = () => {
        navigate(`/item/${product.id}`); // Navegación al detalle del producto
    };

    return (
        <article className='product-card'>
            <h3>{product.title}</h3>
            <img className='product-image' src={product.image} alt={product.title} />
            <p>Category: {product.category}</p>
            <p>Price: $ {product.price}</p>
            <p>Stock: {product.stock}</p>
            <div className="quantity-container">
                <button onClick={() => setQuantity(Math.max(quantity - 1, 1))} className='quantity-button'>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className='quantity-button'>+</button>
            </div>
            <div className="button-container">
                <button className='details-button' onClick={handleDetailsClick}>
                    Detalles
                </button>
                {isInCart(product.id) ? (
                    <button onClick={() => removeItem(product.id)} className='details-button'>Remover</button>
                ) : (
                    <button onClick={handleAdd} className='details-button'>Agregar al carrito</button>
                )}
            </div>
        </article>
    );
}


