// src/components/Alert.js
import React from 'react';
import './Alert.css'; // Ruta del archivo CSS

const Alert = ({ message, onClose }) => {
    return (
        <div className="alert">
            {message}
            <span className="closebtn" onClick={onClose}>&times;</span>
        </div>
    );
};

export default Alert;
