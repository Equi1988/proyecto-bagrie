import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';
import ProducList from './Components/ProductsList.jsx';

function App() {

const [tareas, setTareas] = useState([
  
  { id: 1, nombre: "Estudiar React" },
  { id: 2, nombre: "preparar mate" },
  { id: 3, nombre: "Merendar"}

]);

  return (
    <>
      <header>
        <NavBar/>
      </header>

      <main>
      <ItemListContainer texto = "Bienvenidos a BagRie Shop" />
      {/* <TaskList tareas={tareas}/> */}
      <ProducList/>
      </main>
    </>
  );
}

export default App
