// import { Link } from 'react-router-dom';
// import "./ProductCard.css";
// import { useContext } from 'react';
// import { CartContext } from '../Context/CartContext';

// export default function ProductCard ({product}){

//     const[,, addItem, removeItem, isInCart] = useContext (CartContext);

//     const handleAdd = () =>{
//     addItem (product);
//     }

//     const handleRemove = () =>{
//         removeItem (product.id);
//         }

//     console.log(product);

// return(

// <>
// <article className='product-card'>
//     <h3>{product.title}</h3>
//     <img className='product-image' src={product.image} alt= {product.title} />
//     <p>Category: {product.category}</p>
//     <p>Price: $ {product.price}</p>
//     <div  className="button-container">
//     <button className='details-button'> <Link to= {`./item/${product.id}`} style={{color: "white", textDecoration: "none", display: "block", height: "100%", width: "100%", textAlign: "center", lineHeight: "40px"}}>Detalles </Link></button>

//     { isInCart(product.id) ? (

//     <button onClick={handleRemove} className='details-button'>Remover</button>):(
//     <button onClick={handleAdd} className='details-button'>Comprar</button>
//     )    
//     }
//     </div>
// </article>
// </>

// );
// }

import { Link } from 'react-router-dom';
import "./ProductCard.css";
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export default function ProductCard({ product }) {
    const { addItem, removeItem, isInCart } = useContext(CartContext); // Desestructurar correctamente

    const handleAdd = () => {
        addItem(product);
    };

    const handleRemove = () => {
        removeItem(product.id);
    };

    return (
        <article className='product-card'>
            <h3>{product.title}</h3>
            <img className='product-image' src={product.image} alt={product.title} />
            <p>Category: {product.category}</p>
            <p>Price: $ {product.price}</p>
            <div className="button-container">
                <button className='details-button'>
                    <Link to={`./item/${product.id}`} style={{ color: "white", textDecoration: "none", display: "block", height: "100%", width: "100%", textAlign: "center", lineHeight: "40px" }}>
                        Detalles
                    </Link>
                </button>

                {isInCart(product.id) ? (
                    <button onClick={handleRemove} className='details-button'>Remover</button>
                ) : (
                    <button onClick={handleAdd} className='details-button'>Comprar</button>
                )}
            </div>
        </article>
    );
}




