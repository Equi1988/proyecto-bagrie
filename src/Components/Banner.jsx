import React from 'react';
import { Carousel } from 'react-bootstrap'; // Asegúrate de importar Carousel
import './Banner.css'; // Asegúrate de crear este archivo

const Banner = ({ fotos }) => {
    return (
        <Carousel>
            {fotos.map((foto, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="banner-image"
                        src={foto}
                        alt={`Foto ${index + 1}`}
                        
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Banner;

