
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../asyncMock'; // Asegúrate de que esta función retorne lo correcto
import { CartContext } from '../Context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
    const [product, setProduct] = useState(null); // Cambié a null para manejar la carga inicial
    const { id } = useParams();
    const { addItem, removeItem, isInCart } = useContext(CartContext); // Desestructuración correcta

    useEffect(() => {
        // Asegúrate de que getProduct(id) retorne el producto correctamente
        const fetchProduct = async () => {
            const productData = await getProduct(id);
            setProduct(productData);
        };
        fetchProduct();
    }, [id]);

    const handleAdd = () => {
        addItem(product);
    };

    const handleRemove = () => {
        removeItem(product.id);
    };

    // Manejar el caso en que el producto no se ha cargado todavía
    if (!product) {
        return <p>Cargando...</p>; // Mensaje de carga o spinner
    }

    return (
        <article className="article-container">
            <h2>Product Detail</h2>
            <h4>
                {product.title} - {product.category}
            </h4>
            <img style={{ maxWidth: "20rem", margin: "1rem" }} src={product.image} alt={product.title} />
            <p>Description: {product.description}</p>
            <p>$ {product.price}</p>

            {isInCart(product.id) ? (
                <button onClick={handleRemove} className='details-button-detail'>Remover</button>
            ) : (
                <button onClick={handleAdd} className='details-button-detail'>Comprar</button>
            )}
        </article>
    );
}
