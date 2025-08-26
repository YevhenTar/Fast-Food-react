import './Proposals.scss';

const Proposals = () => {
    return (
        <section className="proposals-section" id="partners-point">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                        <div className="proposal-block proposal-block_dairy-queen scroll-animate">
                            <div className="proposal-block__wrap">
                                <h3 className="proposal-block__headline">Dairy Queen</h3>
                                <p className="proposal-block__text">Dairy Queen is one of the biggest fast-food.</p>
                                <div className="price-block proposal-block__price-block">
                                    <p className="real-price">$4</p>
                                    <p className="old-price">$6</p>
                                </div>
                                <a href="#popup_order" className="button proposal-block__button popup-link">Order
                                    now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                        <div className="proposal-block proposal-block_pizza-hut scroll-animate">
                            <div className="proposal-block__wrap">
                                <h3 className="proposal-block__headline">Pizza Hut</h3>
                                <p className="proposal-block__text">Although the Pizza Hut Menu Prices.</p>
                                <div className="price-block proposal-block__price-block">
                                    <p className="real-price">$3</p>
                                    <p className="old-price">$7</p>
                                </div>
                                <a href="#popup_order" className="button proposal-block__button popup-link">Order
                                    now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                        <div className="proposal-block proposal-block_burger-king scroll-animate">
                            <div className="proposal-block__wrap">
                                <h3 className="proposal-block__headline">Burger King</h3>
                                <p className="proposal-block__text">Together with McDonald’s, Burger King.</p>
                                <div className="price-block proposal-block__price-block">
                                    <p className="real-price">$5</p>
                                    <p className="old-price">$6</p>
                                </div>
                                <a href="#popup_order" className="button proposal-block__button popup-link">Order
                                    now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                        <div className="proposal-block proposal-block_papa-john scroll-animate">
                            <div className="proposal-block__wrap">
                                <h3 className="proposal-block__headline">Papa John’s</h3>
                                <p className="proposal-block__text">Papa John’s is one of the most popular
                                    fast-food.</p>
                                <div className="price-block proposal-block__price-block">
                                    <p className="real-price">$6</p>
                                    <p className="old-price">$8</p>
                                </div>
                                <a href="#popup_order" className="button proposal-block__button popup-link">Order
                                    now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Proposals;