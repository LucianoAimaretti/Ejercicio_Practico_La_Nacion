import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../logo.svg";

import "./navbar.scss";

const Mobile = () => {
    return (
        <>
            <div className="container">
                <div>
                    <a href="https://www.lanacion.com.ar/">
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                </div>
                <div className="right_container">
                    <a className="right_container__sub" href="/">
                        Suscribite
                    </a>
                </div>
            </div>
        </>
    );
};

const Desktop = () => {
    const [menu, setMenu] = useState(true);

    const handleClick = () => setMenu(!menu);
    return (
        <>
            <div className="container">
                <div className="left_container">
                    <ul className="left_container__menu" onClick={handleClick}>
                        {menu ? <FaBars size="25" className="icon" /> : <FaTimes size="25" className="icon" />}
                        {menu ? "Menú" : "Cerrar"}
                    </ul>
                    <input type="text" id="busqueda" className="left_container__buscar" placeholder="Buscar "></input>
                </div>
                <div>
                    <a href="https://www.lanacion.com.ar/">
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                </div>
                <div className="right_container">
                    <button className="right_container__btnSub" href="/">
                        Suscribite
                    </button>
                    <button className="right_container__btnLog" href="/">
                        Ingresar
                    </button>
                </div>
            </div>
        </>
    );
};

export { Mobile, Desktop };
