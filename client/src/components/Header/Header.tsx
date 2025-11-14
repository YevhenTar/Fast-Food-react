
import "./Header.scss";
import logo from '../../assets/img/header/1.png';
import {useState, useEffect, useRef} from "react"; // путь от текущего файла

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const burgerRef = useRef<HTMLDivElement>(null);

    // Следим за скроллом окна
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY >= 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Плавный скролл к секции
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId?: string) => {
        e.preventDefault();
        if (targetId) {
            const el = document.querySelector(targetId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // Обработчик кнопки бургера
    const handleBurgerMenuButton = () => {
        const burger = burgerRef.current;
        if (burger) {
            burger.classList.remove("animate");
            void burger.offsetWidth; // сброс анимации
            setIsBurgerMenuOpen((prev) => !prev);
        }
    };

    // Когда состояние isBurgerMenuOpen меняется — добавляем класс animate после рендера
    useEffect(() => {
        const burger = burgerRef.current;
        if (burger) {
            burger.classList.add("animate");
        }
    }, [isBurgerMenuOpen]);

    return (
        <header className={`main-header lock-padding ${isSticky ? "stickytop" : ""}`}>
            <div className="container">
                <div className="main-header__wrap">
                    <a href="/" className="logo-link" onClick={(e) => handleScrollTo(e)}>
                        <img src={logo} alt="logo" className="logo-image"/>
                    </a>
                    <nav className="menu">
                        <ul className="menu-list">
                            <li className="menu-list__item">
                                <a href="#blog-point"
                                    className="menu-list__link "
                                    onClick={(e) => handleScrollTo(e, "#blog-point")}
                                >Menu</a>
                            </li>
                            <li className="menu-list__item">
                                <a href="#our-offer-point"
                                    className="menu-list__link"
                                    onClick={(e) => handleScrollTo(e, "#our-offer-point")}
                            >Today&rsquo;s Offer</a>
                            </li>
                            <li className="menu-list__item">
                                <a href="#partners-point"
                                    className="menu-list__link"
                                    onClick={(e) => handleScrollTo(e, "#partners-point")}
                                >Partners</a>
                            </li>
                            <li className="menu-list__item">
                                <a href="#reviews-point"
                                    className="menu-list__link"
                                    onClick={(e) => handleScrollTo(e, "#reviews-point")}
                                >Reviews</a>
                            </li>
                            <li className="menu-list__item">
                                <a href="#footer-point"
                                    className="menu-list__link"
                                    onClick={(e) => handleScrollTo(e, "#footer-point")}
                                >Support</a>
                            </li>
                        </ul>
                    </nav>
                    <a 
                        href="#blog-point" 
                        className="button main-header__button popup-link"
                        onClick={(e) => handleScrollTo(e, "#blog-point")}
                    >Order now</a>
                    <div
                        ref={burgerRef}
                        className={`burger-menu ${isBurgerMenuOpen ? "open" : "close"}`}
                        aria-expanded="false" 
                        aria-controls=""
                        onClick={handleBurgerMenuButton}
                    >
                        <div className="burger-menu__line burger-menu__line_top"></div>
                        <div className="burger-menu__line burger-menu__line_middle"></div>
                        <div className="burger-menu__line burger-menu__line_bottom"></div>
                    </div>
                    <div className="hidden-menu">
                        <ul className="hidden-menu__list">
                            <li className="hidden-menu__item">
                                <a href="#blog-point"
                                    className="hidden-menu__link"
                                    onClick={(e) => handleScrollTo(e, "#blog-point")}
                                >Menu</a>
                            </li>
                            <li className="hidden-menu__item">
                                <a href="#our-offer-point"
                                    className="hidden-menu__link"
                                    onClick={(e) => handleScrollTo(e, "#our-offer-point")}
                                >Today&rsquo;s Offer</a>
                            </li>
                            <li className="hidden-menu__item">
                                <a href="#partners-point"
                                    className="hidden-menu__link"
                                    onClick={(e) => handleScrollTo(e, "#partners-point")}
                                >Partners</a>
                            </li>
                            <li className="hidden-menu__item">
                                <a href="#reviews-point"
                                    className="hidden-menu__link"
                                    onClick={(e) => handleScrollTo(e, "#reviews-point")}
                                >Reviews</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;