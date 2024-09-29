import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:category" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/category/:category/item/:id" element={<ItemDetailContainer />} /> {/* Ruta adicional para detalles en categorías */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

