import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useForm } from 'react-hook-form';
import { collection, addDoc, updateDoc, doc, increment } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const [ordersId, setOrdersId] = useState("");
    const { cart, clearCart } = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const comprar = async (data) => {
        const orders = {
            cliente: data,
            products: cart,
            total: totalPrice,
            fecha: new Date().toISOString(),
        };

        const ordersRef = collection(db, "orders");

        try {
            
            const docRef = await addDoc(ordersRef, orders);
            
            await Promise.all(cart.map(async (item) => {
                const productRef = doc(db, "products", item.id);
                await updateDoc(productRef, {
                    stock: increment(-item.quantity) 
                });
            }));
            setOrdersId(docRef.id); 
            clearCart(); 
        } catch (error) {
            console.error("Error al agregar la orden:", error);
        }
    };

    const obtenerFechaCompra = () => {
        const fecha = new Date();
        return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
    };

    if (ordersId) {
        return (
            <div className="container success-message">
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {ordersId}</p>
                <p>Fecha de compra: {obtenerFechaCompra()}</p>
                <Link to="/" className="link-back">Volver a la tienda</Link>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar Compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input 
                    type="text" 
                    placeholder="Ingresá tu nombre" 
                    {...register("nombre", { required: true })} 
                />
                {errors.nombre && <span>Este campo es obligatorio</span>}
                
                <input 
                    type="email" 
                    placeholder="Ingresá tu e-mail" 
                    {...register("email", { required: true })} 
                />
                {errors.email && <span>Este campo es obligatorio</span>}
                
                <input 
                    type="tel" 
                    placeholder="Ingresá tu teléfono" 
                    {...register("telefono", { required: true })} 
                />
                {errors.telefono && <span>Este campo es obligatorio</span>}
                
                <button className="enviar" type="submit">Comprar</button>
            </form>
        </div>
    );
};

export default Checkout;
