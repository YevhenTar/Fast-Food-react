
import "./Header.scss";
import logo from '../../assets/img/header/1.png';
import {useState, useEffect, useRef} from "react"; 

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const burgerRef = useRef<HTMLDivElement>(null);

    /* -------------------------- STICKY HEADER -------------------------- */
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY >= 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* -------------------------- UTILITY FUNCTIONS -------------------------- */
    // 1) pure function for scroll without preventDefault
    const scrollToTarget = (targetId?: string) => {
        if (targetId) {
            const el = document.querySelector(targetId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // 2) reset burger animation
    const resetBurgerAnimation = () => {
        const burger = burgerRef.current;
        if (!burger) return;

        burger.classList.remove("animate");
        void burger.offsetWidth; // reset animation
    };

    // 3) closing menu function
    const closeHiddenMenu = () => {
        resetBurgerAnimation();
        setIsBurgerMenuOpen(false);
    };

    /* -------------------------- HANDLERS -------------------------- */

    // -------------------------- Universal menu items click handler
    const handleHeaderMenuItem = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId?: string
    ) => {
        e.preventDefault();
        scrollToTarget(targetId);

        // закрываем меню только если оно открыто
        if (isBurgerMenuOpen) {
            closeHiddenMenu();
        }
    };

    // burger menu button
    const handleBurgerMenuButton = () => {
        resetBurgerAnimation();
        setIsBurgerMenuOpen((prev) => !prev);
    };

    /* -------------------------- BODY BLOCK FOR MENU -------------------------- */
    useEffect(() => {
        const burger = burgerRef.current;
        if (burger) burger.classList.add("animate");

        if (isBurgerMenuOpen) {
            document.body.classList.add("body-blocked");
        } else {
            document.body.classList.remove("body-blocked");
        }

        return () => document.body.classList.remove("body-blocked");
    }, [isBurgerMenuOpen]);

    /* ------------------------------- JSX ------------------------------------------------------- */

    return (
        <header className={`main-header lock-padding ${isSticky ? "stickytop" : ""}`}>
            <div className="container">
                <div className="main-header__wrap">

                    {/* LOGO */}
                    <a href="/" className="logo-link" onClick={(e) => handleHeaderMenuItem(e)}>
                        <img src={logo} alt="logo" className="logo-image"/>
                    </a>


                    <nav className="menu">
                        <ul className="menu-list">
                            <li className="menu-list__item">
                                <a href="#blog-point"
                                    className="menu-list__link "
                                    onClick={(e) => handleHeaderMenuItem(e, "#blog-point")}
                                >Menu</a>
                            </li>
                            <li className="menu-list__item">
                                <a href="#our-offer-point"
                                    className="menu-list__link"
                                    onClick={(e) => handleHeaderMenuItem(e, "#our-offer-point")}
                            >Today&rsquo;s Offer</a>
                            </li>
                            <li className="menu-list__item">
                                <a href="#partners-point"
                                    className="menu-list__link"
                                    onClick={(e) => handleHeaderMenuItem(e, "#partners-point")}
                                >Partners</a>
                            </li>
                            <li className="menu-list__item">
                                <a href="#reviews-point"
                                    className="menu-list__link"
                                    onClick={(e) => handleHeaderMenuItem(e, "#reviews-point")}
                                >Reviews</a>
                            </li>
                            <li className="menu-list__item">
                                <a href="#footer-point"
                                    className="menu-list__link"
                                    onClick={(e) => handleHeaderMenuItem(e, "#footer-point")}
                                >Support</a>
                            </li>
                        </ul>
                    </nav>

                    {/* MAIN BUTTON */}
                    <a 
                        href="#blog-point" 
                        className="button main-header__button popup-link"
                        onClick={(e) => handleHeaderMenuItem(e, "#blog-point")}
                    >Order now</a>

                    {/* BURGER BUTTON */}
                    <div
                        ref={burgerRef}
                        className={`burger-menu ${isBurgerMenuOpen ? "open" : "close"}`}
                        aria-expanded={isBurgerMenuOpen}
                        aria-controls="hidden-menu"
                        onClick={handleBurgerMenuButton}
                    >
                        <div className="burger-menu__line burger-menu__line_top"></div>
                        <div className="burger-menu__line burger-menu__line_middle"></div>
                        <div className="burger-menu__line burger-menu__line_bottom"></div>
                    </div>

                    {/* HIDDEN MENU */}
                    <div className="hidden-menu" id="hidden-menu">
                        <ul className="hidden-menu__list">
                            <li className="hidden-menu__item">
                                <a href="#blog-point"
                                    className="hidden-menu__link"
                                    onClick={(e) => handleHeaderMenuItem(e, "#blog-point")}
                                >Menu</a>
                            </li>
                            <li className="hidden-menu__item">
                                <a href="#our-offer-point"
                                    className="hidden-menu__link"
                                    onClick={(e) => handleHeaderMenuItem(e, "#our-offer-point")}
                                >Today&rsquo;s Offer</a>
                            </li>
                            <li className="hidden-menu__item">
                                <a href="#partners-point"
                                    className="hidden-menu__link"
                                    onClick={(e) => handleHeaderMenuItem(e, "#partners-point")}
                                >Partners</a>
                            </li>
                            <li className="hidden-menu__item">
                                <a href="#reviews-point"
                                    className="hidden-menu__link"
                                    onClick={(e) => handleHeaderMenuItem(e, "#reviews-point")}
                                >Reviews</a>
                            </li>
                            <li className="hidden-menu__item">
                                <a href="#footer-point"
                                    className="hidden-menu__link"
                                    onClick={(e) => handleHeaderMenuItem(e, "#footer-point")}
                                >Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;