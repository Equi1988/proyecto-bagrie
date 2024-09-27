import { Link } from 'react-router-dom';


export default function ProductCard ({product}){

return(

<>

<article style={{ padding: 10 , width: "15rem", margin: 10, flexWrap: "wrap"}}>
    {/* <h3>{product.title}</h3> */}
    <img style={{width:"100%", height: "auto"}} src={product.image} alt= {product.title} />
    <p>Category: {product.category}</p>
    <p>Price: $ {product.price}</p>
    <button style= {{ textAlign: "none",background:"Black", color: "white", width: 90, height: 40, fontSize: "1rem", margin: "1rem"} }> <Link to= {`./product/${product.id}`}>Detalles </Link></button>

    {/* <button style= {{background:"Black", color: "white", width: 100, height: 40, fontSize: "1rem"} }> <Link to={`/product/${product.id}`} Detalle></Link></button>  */}
</article>
</>

);
}





