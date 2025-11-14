import "./HomeSection.scss";

const HomeSection = () => {
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

    return (
        <section className="home-section">
            <div className="container">
                <div className="home-block">
                    <h1 className="home-block__headline">FAST FOOD BURGERS</h1>
                    <h2 className="home-block__subheadline">The fastest food, for instant hunger.</h2>
                    <p className="home-block__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero
                        recusandae ratione rerum cumque alias minus deleniti, quam, magnam dolore unde vel,
                        eligendi
                        nulla molestias numquam. Enim, cum porro?</p>
                    <div className="home-block__button-wrap">
                        <a 
                            href="#popup_order" 
                            className="button popup-link"
                            onClick={(e) => handleScrollTo(e, "#blog-point")}
                        >Order now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection