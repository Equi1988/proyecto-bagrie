import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ItemListContainer from "./ItemListContainer";
import ReactLoading from "react-loading";
import "./ContainerLoading.css";

export default function ContainerLoading () {

const [isLoading, setIsLoading] = useState (true);

useEffect (() => {

    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

}, []);

return <>

<div className="loading-container">
{isLoading ? <ReactLoading type="balls" color="#804000" height={'20%'} width={'20%'}/> : <ItemListContainer/>} 
</div>
</>

}

