import CartWidget from "./CartWidget.jsx";
import "./NavBar.css";
import "./CartWidget.css";



function NavBar(){

    return (
    <>
    <header>
        <nav>        
        <a href="index.html">
        <svg id="logo-89" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="ccustom" d="M39.9449 21.4998H32.8003C26.5594 21.4998 21.5003 26.559 21.5003 32.7998V39.9444C31.3502 39.214 39.2145 31.3497 39.9449 21.4998Z" fill="#775732"></path><path className="ccustom" d="M18.5003 39.9444V32.7998C18.5003 26.559 13.4411 21.4998 7.20026 21.4998H0.0556641C0.785998 31.3497 8.65036 39.214 18.5003 39.9444Z" fill="#775732"></path><path className="ccustom" d="M39.9449 18.4998C39.2145 8.64987 31.3502 0.78551 21.5003 0.0551758V7.19977C21.5003 13.4406 26.5594 18.4998 32.8003 18.4998H39.9449Z" fill="#775732"></path><path className="ccustom" d="M18.5003 0.0551758C8.65036 0.78551 0.785998 8.64987 0.0556641 18.4998H7.20026C13.4411 18.4998 18.5003 13.4406 18.5003 7.19977V0.0551758Z" fill="#775732"></path><path className="ccustom" d="M13.583 19.9998C16.3555 18.6145 18.615 16.355 20.0002 13.5825C21.3855 16.355 23.6449 18.6145 26.4175 19.9998C23.6449 21.385 21.3855 23.6445 20.0002 26.417C18.615 23.6445 16.3555 21.385 13.583 19.9998Z" fill="#CA9352"></path></svg>
        </a>
            <div>
                <ul id='navBar'>
                    <button> <a className='active' href="index.html">Home</a></button>
                    <button> <a href="">PC Gamers</a></button>
                    <button> <a href="">Consolas y Juegos</a></button>
                    <button> <a href="">Impresoras 3D</a></button>
                </ul>
            </div>
        < CartWidget />
        </nav>
        </header>
    </>
    )    
}

export default NavBar;