import './Footer.scss';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
                        <div className="contacts-block">
                            <a href="#" className="logo-link contacts-block__logo-link">
                                <img src="assets/img/header/logo-1.svg" alt="logo"
                                     className="logo-image contacts-block__logo-image"/>
                            </a>
                            <div className="contacts contacts-block__contacts">
                                <a href="mailto:fastfood_usa@gmail.com"
                                   className="contacts-block__link contacts-block__link_email">fastfood_usa@gmail.com</a>
                                <a href="www.fastfood_usa.com"
                                   className="contacts-block__link contacts-block__link_site"> www.fastfood_usa.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-4">
                        <div className="footer-menu">
                            <h5 className="footer-menu__headline">Our menu
                            </h5>
                            <ul className="footer-menu__list">
                                <li className="footer-menu__list-item"><a href="#"
                                                                          className="footer-menu__link">Breakfast</a>
                                </li>
                                <li className="footer-menu__list-item"><a href="#" className="footer-menu__link">Lunce
                                </a></li>
                                <li className="footer-menu__list-item"><a href="#"
                                                                          className="footer-menu__link">Dinner</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-4">
                        <div className="footer-menu">
                            <h5 className="footer-menu__headline">Information</h5>
                            <ul className="footer-menu__list">
                                <li className="footer-menu__list-item"><a href="#" className="footer-menu__link">About
                                    us</a></li>
                                <li className="footer-menu__list-item"><a href="#"
                                                                          className="footer-menu__link">Testimonials</a>
                                </li>
                                <li className="footer-menu__list-item"><a href="#"
                                                                          className="footer-menu__link">Events</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-4">
                        <div className="footer-menu">
                            <h5 className="footer-menu__headline">Useful Links</h5>
                            <ul className="footer-menu__list">
                                <li className="footer-menu__list-item"><a href="#"
                                                                          className="footer-menu__link">Services</a>
                                </li>
                                <li className="footer-menu__list-item"><a href="#"
                                                                          className="footer-menu__link">Support</a></li>
                                <li className="footer-menu__list-item"><a href="#"
                                                                          className="footer-menu__link">Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                        <div className="social-media">
                            <h5 className="social-media__headline">Social Handles</h5>
                            <div className="link-container">
                                <a href="#" className="link-container__link">
                                    <img src="assets/img/footer/fb-icon.svg" alt="fb-icon"
                                         className="link-container__icon"/>
                                </a>
                                <a href="#" className="link-container__link">
                                    <img src="assets/img/footer/twitter-icon.svg" alt="twitter-icon"
                                         className="link-container__icon"/>
                                </a>
                                <a href="#" className="link-container__link">
                                    <img src="assets/img/footer/instagram-icon.svg" alt="instagram-icon"
                                         className="link-container__icon"/>
                                </a>
                                <a href="#" className="link-container__link">
                                    <img src="assets/img/footer/linkedin-icon.svg" alt="linkedin-icon"
                                         className="link-container__icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;