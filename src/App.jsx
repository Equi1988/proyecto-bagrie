import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer.jsx';
import CartProvider from './Context/CartContext.jsx'; // Cambia a exportación por defecto
import ContainerLoading from './Components/ContainerLoading.jsx';
import Cart from './Components/Cart.jsx';
import Checkout from "./Components/Checkout.jsx";
import Contacto from './Components/Contacto.jsx';

function App() {
    return (
    <CartProvider>
        <BrowserRouter>
                <NavBar />
                <div>
                    <Routes>
                        <Route exact path="/" element={<ContainerLoading />} />
                        <Route exact path="/category/:category" element={<ItemListContainer />} />
                        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path="/category/:category/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                    </Routes>
                </div>
                </BrowserRouter>
            </CartProvider>
        
    );
}

export default App;



