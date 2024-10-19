import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import Swal from 'sweetalert2'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCard.css';

export default function ProductCard({ product }) {
    const { addItem, removeItem, isInCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const showAlertMessage = (message) => {
        Swal.fire({
            icon: 'warning',
            title: '¡Atención!',
            text: message,
            timer: 3000, 
            showConfirmButton: false,
        });
    };

    const handleAdd = () => {
        if (product.stock >= quantity) {
            addItem(product, quantity);
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado',
                text: `${quantity} ${product.title} se ha agregado al carrito.`,
                timer: 2000,
                showConfirmButton: false,
            });
        } else {
            showAlertMessage("No hay suficiente stock disponible");
        }
    };

    const handleRemove = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: `¿Deseas remover ${product.title} del carrito?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, remover',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(product.id);
                Swal.fire({
                    icon: 'success',
                    title: 'Producto removido',
                    text: `${product.title} ha sido removido del carrito.`,
                    timer: 2000,
                    showConfirmButton: false,
                });
            }
        });
    };

    const handleDetailsClick = () => {
        navigate(`/item/${product.id}`);
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
                    <button onClick={handleRemove} className='details-button'>Remover</button>
                ) : (
                    <button onClick={handleAdd} className='details-button'>Agregar al carrito</button>
                )}
            </div>
        </article>
    );
}
