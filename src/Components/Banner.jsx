import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import './Banner.css'; 

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

