import "./style.scss";

import logo from "../Menu/icons/logo.svg"
import LogoTitle from "./assets/logo-title.svg";
import { ReactSVG } from "react-svg";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
            {/* <ReactSVG src={logo} style={{width:"160px"}} /> */}
                <div className="footer-content__links-container">
                </div>
                <span>Нашли ошибку?&nbsp;Сообщите нам!</span>
            </div>
        </footer>
    );
}
