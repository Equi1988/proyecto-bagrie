import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { CartContext } from '../Context/CartContext';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemListContainer.css";

export default function ItemListContainer() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const { cart } = useContext(CartContext);

    useEffect(() => {

        const productsRef = collection (db, "products");
        const q = category ? query(productsRef, where("category","==", category)): productsRef;

        getDocs (q)
        .then((resp)=>{
            // console.log(resp.docs[0].id)
            // console.log(resp.docs[0].data());

            setProducts(

                resp.docs.map ((doc)=>{
                    return { ...doc.data(), id: doc.id }
                })
            )

        })

    }, [category, cart]);

    return (
        <>
            <h2>{category}</h2>
            <section className="card">
                <div className="card-wrapper">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </>
    );
}

