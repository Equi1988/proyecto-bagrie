import { useEffect, useState } from "react";
import ProducCard from "./ProducCard";

export default function ProducList (){

    const [ produts, setProducts] =useState([]);

    useEffect (() =>{

        fetch("https://fakestoreapi.com/products/category/electronics")
        .then(response=> response.json())
        .then (data => setProducts (data))
        .catch ((error)=> console.log(error))
        .finally(()=> console.log ("Final del proceso"))
    }, []);

    return (
        <>
        <section>
        { produts.map((product) =>( 
            <ProducCard key={product.id} product={product}/>
        ))}
        </section>

        </>
    )




}