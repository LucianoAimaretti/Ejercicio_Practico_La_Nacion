import logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <a className="navbar__left__menu" href="/">
                    Menú
                </a>
                <input type="text" id="busqueda" className="navbar__left__buscar" placeholder="Buscar "></input>
            </div>
            <div>
                <a href="https://www.lanacion.com.ar/">
                    <img src={logo} className="navbar__logo" alt="logo" />
                </a>
            </div>
            <div className="navbar__right">
                <a className="navbar__right__sub" href="/">
                    suscribite
                </a>
                <button className="navbar__right__btnSub" href="/">
                    suscribite
                </button>
                <button className="navbar__right__btnLog" href="/">
                    Ingresar
                </button>
            </div>
        </nav>
    );
}

export { Navbar };
