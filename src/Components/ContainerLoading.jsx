import { useEffect, useState } from "react";
import ItemListContainer from "./ItemListContainer";
import ReactLoading from "react-loading";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ContainerLoading.css";
import Banner from "./Banner";

export default function ContainerLoading() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simula 2 segundos de carga

        return () => clearTimeout(timer);
    }, []);

    const fotos = [
        "https://www.cdmarket.com.ar/Pubs/Sites/Default/Custom/home-office.jpg",
        "https://www.shutterstock.com/image-vector/games-time-neon-text-gamepad-260nw-2288041501.jpg", // Reemplaza con URLs válidas
        "https://content.wepik.com/statics/21948625/preview-page0.jpg"  // Reemplaza con URLs válidas
    ];

    return (
        <>
        <Banner fotos={fotos} />
        <div>
            {isLoading ? (
                <div className="loading-container">
                    <ReactLoading type="balls" color="#804000" height={'20%'} width={'20%'} />
                    <p>Cargando...</p>
                </div>
            ) : (
                <>

                
                <ItemListContainer />

                </>
            )}
        </div>

        </>
    );
}


