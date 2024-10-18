import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc} from "firebase/firestore";
import { db } from '../firebase/firebase';
import { CartContext } from '../Context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const { addItem, removeItem, isInCart, cart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {

        const docRef = doc (db, "products",id);
        getDoc(docRef)
        .then((resp)=>{
            setProduct (
                {...resp.data(), id: resp.id});
        })

    }, [id]);

    useEffect(() => {
        if (product) {
            const inCart = cart.find(item => item.id === product.id);
            if (inCart) {
                setQuantity(Math.min(inCart.quantity, product.stock));
            }
        }
    }, [product, cart]);

    const handleAdd = () => {
        if (product && product.stock >= quantity) {
            addItem(product, quantity);
        } else {
            alert("No hay suficiente stock disponible");
        }
    };

    if (!product) {
        return <p>Cargando...</p>;
    }

    return (
        <article className="article-container">
            <h2>Product Detail</h2>
            <h4>{product.title} - {product.category}</h4>
            <img style={{ maxWidth: "20rem", margin: "1rem" }} src={product.image} alt={product.title} />
            <p>Description: {product.description}</p>
            <p>Price: $ {product.price}</p>
            <p>Stock: {product.stock}</p>
            <div className="quantity-container">
                <button onClick={() => setQuantity(Math.max(quantity - 1, 1))} className="quantity-button">-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(Math.min(quantity + 1, product.stock))} className="quantity-button">+</button>
            </div>
            {isInCart(product.id) ? (
                <button style={{fontSize:"1rem"}}onClick={() => removeItem(product.id)} className='details-button-detail'>Remover</button>
            ) : (
                <button style={{fontSize:"1rem"}} onClick={handleAdd} className='details-button-detail'>Agregar al carrito</button>
            )}
        </article>
    );
}
