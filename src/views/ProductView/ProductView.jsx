import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';

export default function ProductView() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

useEffect(() => {
    setProduct(getProduct(id));
}, []);

return (
    <>
    <article style={{ padding: 40, fontSize: "1.5rem", color: 'white' }}>
        <h2>Product Detail</h2>
        <h4>
        {product.title} - {product.category}
        </h4>
        <img style={{ maxWidth: "20rem", margin:"1rem"}}src={product.image} alt={product.title} />
        <p>Description: {product.description}</p>
        <p>$ {product.price}</p>
    </article>
    </>
);
}