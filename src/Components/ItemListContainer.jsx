import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getProducts } from "../asyncMock";
import "./ItemListContainer.css";

export default function ItemListContainer() {
    const { category } = useParams(); // Obtener la categoría de los parámetros de la ruta
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((data) => {
                if (category) {
                    const filteredProducts = data.filter(
                        (product) => product.category === category
                    );
                    setProducts(filteredProducts);
                } else {
                    setProducts(data);
                }
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [category]);

    return (
        <>
            <h2>{category}</h2>
            <section className="card">
                <div className="card-wrapper">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}  />
                ))}
                </div>
            </section>
        </>
    );
}
