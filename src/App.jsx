import './App.css'
import NavBar from './Components/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer.jsx';

function App() {

  return (
    <>
      <header>
        <NavBar/>
      </header>

      <main>
      <ItemListContainer texto = "Bienvenidos a BagRie Shop" />
      </main>
    </>
  )
}

export default App
