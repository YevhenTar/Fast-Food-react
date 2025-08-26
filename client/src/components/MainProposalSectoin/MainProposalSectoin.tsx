import './MainProposalSection.scss';

const MainProposalSectoin = () => {
    return (
        <section className="main-proposal-section" id="our-offer-point">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                        <div className="main-proposal-block scroll-animate">
                            <img src="assets/img/main-proposal-section/burger-king.png" alt="burger"
                                 className="main-dish-image"/>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                        <div className="info-wrap scroll-animate">
                            <div className="text-block">
                                <h2 className="text-block__headline">Burger King</h2>
                                <p className="text-block__text">Together with McDonald’s, Burger King has grown to
                                    become
                                    synonymous with burgers in the US.</p>
                                <div className="price-block text-block__price-block">
                                    <p className="price-block__real-price">$6</p>
                                    <p className="price-block__old-price">$8</p>
                                </div>
                                <a href="#popup_order" className="button popup-link">Order now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainProposalSectoin;