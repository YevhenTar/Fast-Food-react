import "./DishesSection.scss";

const DishesSection = () => {
    return (
        <section className="dishes-section" id="blog-point">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-sm-6 col-12 dishes-section__column">
                        <div className="dish-block dish-block_anim-one scroll-animate">
                            <div className="dish-block__image-wrap">
                                <img src="assets/img/dish-section/chicken-paella.png" alt="dish"
                                     className="dish-block__image"/>
                            </div>
                            <div className="dish-block__text-wrap">
                                <h4 className="dish-block__headline">Chicken Paella</h4>
                                <p className="dish-block__text">We just don't make and sell food. Good food warms.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-sm-6 col-12 dishes-section__column">
                        <div className="dish-block dish-block_anim-two scroll-animate">
                            <div className="dish-block__image-wrap">
                                <img src="assets/img/dish-section/taco-del-mar.png" alt="dish"
                                     className="dish-block__image"/>
                            </div>
                            <div className="dish-block__text-wrap">
                                <h4 className="dish-block__headline">Taco Del Mar</h4>
                                <p className="dish-block__text">Taco Del Mar brings the best out of Mexican cuisine with
                                    fresh.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-sm-6 col-12 dishes-section__column">
                        <div className="dish-block dish-block_anim-three scroll-animate">
                            <div className="dish-block__image-wrap">
                                <img src="assets/img/dish-section/bon-au-pain.png" alt="dish"
                                     className="dish-block__image"/>
                            </div>
                            <div className="dish-block__text-wrap">
                                <h4 className="dish-block__headline">Bon Au Pain</h4>
                                <p className="dish-block__text">Bon Au Pain is a pioneer in the healthy fast food
                                    scene.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-sm-6 col-12 dishes-section__column">
                        <div className="dish-block dish-block_anim-four scroll-animate">
                            <div className="dish-block__image-wrap">
                                <img src="assets/img/dish-section/pizza-hut.png" alt="dish"
                                     className="dish-block__image"/>
                            </div>
                            <div className="dish-block__text-wrap">
                                <h4 className="dish-block__headline">Pizza Hut</h4>
                                <p className="dish-block__text">Although the Pizza Hut Menu Prices have tumbled over the
                                    years.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DishesSection;