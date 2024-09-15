import PropTypes from 'prop-types';

export default function ProducCard ({product}){

return(

<>

<article style={{display:"flex",margin:10, padding:10, fontSize: "1.5rem", color: "white"}}>
    <h3>{product.title}</h3>
    <img style={{width:80}} src={product.image} alt= {product.title} />
    <p>Category: {product.category}</p>
    <p>Price: {product.price}</p>
    <button style= {{background:"Black", color: "white", width: 100, height: 40, fontSize: "1rem"} }>Comprar</button>
</article>
</>
);
}

ProducCard.propTypes = {
    texto: PropTypes.string.isRequired,
};


