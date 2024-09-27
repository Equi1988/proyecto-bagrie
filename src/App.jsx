import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';
// import ProductsList from './Components/ProductsList.jsx';
import PcGamersViews from './views/PCGamersViews/PcGamersViews.jsx';
import Consolas from './views/Consolas/Consolas.jsx';
import HomeView from './views/HomeViews/HomeViews.jsx';
import ProductView from './views/ProductView/ProductView.jsx';
import Accesorios from './views/Accesorios/Accesorios.jsx';

function App() {

  return (
    <>
      
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<HomeView />} />
          <Route exact path="/pcgamers" element={<PcGamersViews />} />
          <Route exact path="/consolas/" element={<Consolas />} />
          <Route exact path="/accesorios" element={<Accesorios />} />
          <Route exact path="/product/:id" element={< ProductView />} />
        </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App
