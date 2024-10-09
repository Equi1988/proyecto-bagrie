import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import ContainerLoading from './Components/ContainerLoading.jsx';
import Cart from './Components/Cart.jsx';



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <div>
          {/* <h1 style={{
            textalign: "center",
            fontsize: "3rem",
            fontfamily: 'Montserrat',
            color: "#804000",
            margin: "20px"
          }}>BagRie Shop</h1> */}
          <Routes>
            <Route exact path="/" element={<ContainerLoading />} />
            <Route exact path="/category/:category" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/category/:category/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;


