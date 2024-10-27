import React from "react";
import './footer.css';
import Facebook from '../../asset/link.png';
import Telegram from '../../asset/telegram.png';
import Email from '../../asset/email.png';
import Phone from '../../asset/pngwing.png';

const Footer = () => {
    return (
        <footer className="footer">
            Copyright &#169; 2024 Betelhem. All right reserved. 
            <div className="links">
                <div className="left-icons">
                    <a href="https://www.linkedin.com/in/betelhem-yigzaw-540805296/"><img src={Facebook} alt="Facebook" className="link" /></a>
                    <a href="https://t.me/maren3g"><img src={Telegram} alt="Telegram" className="link" /></a>
                </div>
                <div className="right-icons">
                    <a href="mailto:betelhemyegzaw468@gmail.com"><img src={Email} alt="Email" className="link" /></a>      
                    <a href="tel:+251930870239"><img src={Phone} alt="Phone" className="link" /></a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
