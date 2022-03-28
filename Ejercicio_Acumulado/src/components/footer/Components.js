import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram, FaSignal } from "react-icons/fa";

import logo from "../../logo.svg";
import androidStore from "../../assets/android-store.svg";
import iosStore from "../../assets/ios-store.svg";
import dataFiscal from "../../assets/data-fiscal.svg";
import gda from "../../assets/gda.svg";

import "./footer.scss";

export function Row_mobile() {
    return (
        <>
            <section className="row_1">
                <div>
                    <a href="https://www.lanacion.com.ar/">
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                </div>
            </section>
            <section className="row_2__mobile">
                <div className="col_1">
                    <a href="https://www.facebook.com/lanacion">
                        <FaFacebookF size="26" />
                    </a>
                    <a href="https://twitter.com/lanacion">
                        <FaTwitter size="26" />
                    </a>
                    <a href="https://www.instagram.com/lanacioncom/">
                        <FaInstagram size="26" />
                    </a>
                    <a href="https://servicios.lanacion.com.ar/herramientas/rss/ayuda">
                        <FaSignal size="26" />
                    </a>
                </div>
                <div className="col_2">
                    <a href="https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419">
                        <img src={androidStore} alt="Android Store"></img>
                    </a>
                    <a href="https://apps.apple.com/ar/app/la-nacion/id410689702">
                        <img src={iosStore} alt="ios Store"></img>
                    </a>
                </div>
                <div className="col_3">
                    <a href="http://gda.com/">
                        <img src={gda} alt="GDA"></img>
                    </a>
                    <span>Miembro de GDA. Grupo de Diarios América</span>
                    <a href="https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx">
                        <img src={dataFiscal} alt="Data Fiscal"></img>
                    </a>
                </div>
                <div className="col_4">
                    <span>Copyright 2022 SA LA NACION | Todos los derechos reservados</span>
                </div>
            </section>
        </>
    );
}

export function Row_desktop() {
    return (
        <>
            <section className="row_1">
                <div className="col_1">
                    <a href="https://www.facebook.com/lanacion">
                        <FaFacebookF size="26" />
                    </a>
                    <a href="https://twitter.com/lanacion">
                        <FaTwitter size="26" />
                    </a>
                    <a href="https://www.instagram.com/lanacioncom/">
                        <FaInstagram size="26" />
                    </a>
                    <a href="https://servicios.lanacion.com.ar/herramientas/rss/ayuda">
                        <FaSignal size="26" />
                    </a>
                </div>
                <div className="col_2">
                    <a href="https://www.lanacion.com.ar/">
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                </div>
                <div className="col_3">
                    <a href="https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419">
                        <img src={androidStore} alt="Android Store"></img>
                    </a>
                    <a href="https://apps.apple.com/ar/app/la-nacion/id410689702">
                        <img src={iosStore} alt="ios Store"></img>
                    </a>
                </div>
            </section>
            <section className="row_2">
                <div className="col_1">
                    <a href="https://www.lanacion.com.ar/mapa-del-sitio/">Mapa del sitio</a>
                    <a href="https://micuenta.lanacion.com.ar/ayuda">Ayuda</a>
                    <a href="https://micuenta.lanacion.com.ar/tyc"> Términos y Condiciones</a>
                    <a href="https://www.lanacion.in/">¿ Cómo anunciar?</a>
                    <a href="https://suscripciones.lanacion.com.ar/suscribirme">Suscribirse al diario impreso</a>
                </div>
                <div className="col_2">
                    <span>
                        Protegido por reCAPTCHA:
                        <div className="captcha">
                            <a href="https://policies.google.com/terms?hl=es-419">Condiciones</a>
                            <a href="https://policies.google.com/privacy?hl=es-419">Privacidad</a>
                        </div>
                    </span>
                </div>
            </section>
            <section className="row_3">
                <div className="col_1">
                    <span>Copyright 2022 SA LA NACION | Todos los derechos reservados</span>
                </div>
                <div className="col_2">
                    <a href="http://gda.com/">
                        <img src={gda} alt="GDA"></img>
                    </a>
                    <span>Miembro de GDA. Grupo de Diarios América</span>
                    <a className="" href="https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx">
                        <img src={dataFiscal} alt="Data Fiscal"></img>
                    </a>
                </div>
            </section>
        </>
    );
}

export default { Row_mobile, Row_desktop };
