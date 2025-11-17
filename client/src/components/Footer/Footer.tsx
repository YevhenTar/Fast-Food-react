import './Footer.scss';
import footerLogo from "../../assets/img/header/logo-1.svg";
import facebookLogo from "../../assets/img/footer/fb-icon.svg";
import twitterLogo from "../../assets/img/footer/twitter-icon.svg";
import instagramLogo from "../../assets/img/footer/instagram-icon.svg";
import linkedInLogo from "../../assets/img/footer/linkedin-icon.svg";

const Footer = () => {
    return (
        <footer className="main-footer" id="footer-point">
            <div className="container">
                <div className="main-footer__service-block">
                    <div className="contacts-block">
                        <a href="#" className="logo-link contacts-block__logo-link">
                            <img src={footerLogo} alt="logo"
                                 className="logo-image contacts-block__logo-image"/>
                        </a>
                        <div className="contacts contacts-block__contacts">
                            <a href="mailto:example_email@gmail.com"
                               className="contacts-block__link contacts-block__link_email">example_email@gmail.com</a>
                            <a href="/"
                               className="contacts-block__link contacts-block__link_site">www.fastfood_usa.com</a>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <h5 className="footer-menu__headline">Our menu
                        </h5>
                        <ul className="footer-menu__list">
                            <li className="footer-menu__list-item">
                                <a href="#" className="footer-menu__link">Breakfast</a>
                            </li>
                            <li className="footer-menu__list-item">
                                <a href="#" className="footer-menu__link">Lunch</a>
                            </li>
                            <li className="footer-menu__list-item">
                                <a href="#" className="footer-menu__link">Dinner</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <h5 className="footer-menu__headline">Information</h5>
                        <ul className="footer-menu__list">
                            <li className="footer-menu__list-item">
                                <a href="#" className="footer-menu__link">About us</a>
                            </li>
                            <li className="footer-menu__list-item">
                                <a href="#" className="footer-menu__link">Testimonials</a>
                            </li>
                            <li className="footer-menu__list-item">
                                <a href="#" className="footer-menu__link">Events</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <h5 className="footer-menu__headline">Useful Links</h5>
                        <ul className="footer-menu__list">
                            <li className="footer-menu__list-item">
                                <a href="#" className="footer-menu__link">Services</a>
                            </li>
                            <li className="footer-menu__list-item">
                                <a href="#" className="footer-menu__link">Support</a>
                            </li>
                            <li className="footer-menu__list-item">
                                <a href="#" className="footer-menu__link">Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <h5 className="social-media__headline">Social Handles</h5>
                        <div className="link-container">
                            <a href="#" className="link-container__link">
                                <img src={facebookLogo} alt="fb-icon"
                                     className="link-container__icon"/>
                            </a>
                            <a href="#" className="link-container__link">
                                <img src={twitterLogo} alt="twitter-icon"
                                     className="link-container__icon"/>
                            </a>
                            <a href="#" className="link-container__link">
                                <img src={instagramLogo} alt="instagram-icon"
                                     className="link-container__icon"/>
                            </a>
                            <a href="#" className="link-container__link">
                                <img src={linkedInLogo} alt="linkedin-icon"
                                     className="link-container__icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;