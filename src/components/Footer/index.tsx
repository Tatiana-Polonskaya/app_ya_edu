import "./style.scss";

import LogoTitle from "./assets/logo-title.svg";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={""} alt="Logo" />
                <div className="footer-content__links-container">
                </div>
                <span>Нашли ошибку?&nbsp;Сообщите нам!</span>
            </div>
        </footer>
    );
}
