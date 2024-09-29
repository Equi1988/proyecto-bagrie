import { Link } from 'react-router-dom';
import "./ProductCard.css";

export default function ProductCard ({product}){

return(

<>
<article className='product-card'>
    <h3>{product.title}</h3>
    <img className='product-image' src={product.image} alt= {product.title} />
    <p>Category: {product.category}</p>
    <p>Price: $ {product.price}</p>
    <button className='details-button'> <Link to= {`./item/${product.id}`} style={{color: "white", textDecoration: "none", display: "block", height: "100%", width: "100%", textAlign: "center", lineHeight: "40px"}}>Detail </Link></button>
</article>
</>

);
}





