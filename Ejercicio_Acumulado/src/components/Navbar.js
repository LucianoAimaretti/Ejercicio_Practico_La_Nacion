import logo from "../logo.svg";
import "./components.scss";

export default function Navbar() {
    return (
        <section className="navbar">
            <div className="navbar__left">
                <span />
                <span />
                <span />
                <a className="navbar__left__menu" href="/">
                    Menú
                </a>
                <input type="text" id="busqueda" className="navbar__left__buscar" placeholder="Buscar "></input>
            </div>
            <div>
                <a href="/">
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
        </section>
    );
}

export { Navbar };
