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

// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./ProductCard.css";
// import { useContext } from 'react';
// import { CartContext } from '../Context/CartContext';


// export default function ProductCard({ product }) {
//     const { addItem, removeItem, isInCart } = useContext(CartContext); // Desestructurar correctamente

//     const handleAdd = () => {
//         addItem(product);
//     };

//     const handleRemove = () => {
//         removeItem(product.id);
//     };

//     return (
//         <article className='product-card'>
//             <h3 style={{fontSize:"1rem"}}>{product.title}</h3>
//             <img className='product-image' src={product.image} alt={product.title} />
//             <p>Category: {product.category}</p>
//             <p>Price: $ {product.price}</p>
//             <div className="button-container">
//                 <button className='details-button'>
//                     <Link to={`./item/${product.id}`} style={{ color: "white", textDecoration: "none", display: "block", height: "100%", width: "100%", textAlign: "center", lineHeight: "40px" }}>
//                         Detalles
//                     </Link>
//                 </button>

//                 {isInCart(product.id) ? (
//                     <button onClick={handleRemove} className='details-button'>Remover</button>
//                 ) : (
//                     <button onClick={handleAdd} className='details-button'>Comprar</button>
//                 )}
//             </div>
//         </article>
//     );
// }

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ProductCard.css";
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

export default function ProductCard({ product }) {
    const { addItem, removeItem, isInCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1); // Estado para la cantidad

    const handleAdd = () => {
        addItem(product, quantity); // Pasar la cantidad al método addItem
    };

    const handleRemove = () => {
        removeItem(product.id);
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <article className='product-card'>
            <h3 style={{fontSize:"1rem"}}>{product.title}</h3>
            <img className='product-image' src={product.image} alt={product.title} />
            <p>Category: {product.category}</p>
            <p>Price: $ {product.price}</p>
            <div className="quantity-container">
                <button onClick={decreaseQuantity} className='quantity-button'>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity} className='quantity-button'>+</button>
            </div>
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




