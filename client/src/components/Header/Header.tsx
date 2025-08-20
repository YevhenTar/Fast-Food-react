import "./Header.scss";
import logo from '../../assets/img/header/1.png'; // путь от текущего файла

const Header = () => {
    return (
        <header className="main-header lock-padding">
            <div className="main-header__wrap">
                <a href="#" className="logo-link">
                    <img src={logo} alt="logo" className="logo-image"/>
                </a>
                <nav className="menu">
                    <ul className="menu-list">
                        <li className="menu-list__item"><a href="#blog-point"
                                                           className="menu-list__link">Blog</a></li>
                        <li className="menu-list__item"><a href="#our-offer-point"
                                                           className="menu-list__link">Our
                            offer</a></li>
                        <li className="menu-list__item"><a href="#partners-point"
                                                           className="menu-list__link">Partners</a></li>
                        <li className="menu-list__item"><a href="#reviews-point"
                                                           className="menu-list__link">Reviews</a>
                        </li>
                    </ul>
                </nav>
                <a href="#popup_order" className="button main-header__button popup-link">Order now</a>
                <div className="burger-menu" aria-expanded="false" aria-controls="">
                    <div className="burger-menu__line burger-menu__line_top"></div>
                    <div className="burger-menu__line burger-menu__line_middle"></div>
                    <div className="burger-menu__line burger-menu__line_bottom"></div>
                </div>
                <div className="hidden-menu">
                    <ul className="hidden-menu__list">
                        <li className="hidden-menu__item"><a href="#blog-point"
                                                             className="hidden-menu__link">Blog</a>
                        </li>
                        <li className="hidden-menu__item"><a href="#our-offer-point"
                                                             className="hidden-menu__link">Our
                            offer</a></li>
                        <li className="hidden-menu__item"><a href="#partners-point"
                                                             className="hidden-menu__link">Partners</a></li>
                        <li className="hidden-menu__item"><a href="#reviews-point"
                                                             className="hidden-menu__link">Reviews</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;