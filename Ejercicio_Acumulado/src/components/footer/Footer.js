import logo from "../../logo.svg";
import "./footer.scss";

export default function Footer() {
    return (
        <section className="footer">
            <div className="footer__ftrLine">
                <a href="https://www.lanacion.com.ar/">
                    <img src={logo} className="footer__logo" alt="logo" />
                </a>
            </div>
        </section>
    );
}

export { Footer };
