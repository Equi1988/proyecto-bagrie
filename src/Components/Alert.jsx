import React from 'react';
import './Alert.css';

const Alert = ({ message, onClose }) => {
    return (
        <div className="alert">
            {message}
            <span className="closebtn" onClick={onClose}>&times;</span>
        </div>
    );
};

export default Alert;
