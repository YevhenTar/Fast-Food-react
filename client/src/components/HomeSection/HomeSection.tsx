import "./HomeSection.scss";

const HomeSection = () => {
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
                        <a href="#popup_order" className="button popup-link">Order now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection