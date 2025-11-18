import './MainProposalSection.scss';
import burgerKing from '../../assets/img/main-proposal-section/burger-king.png';
import Button from '../../ui/Button/Button';

const MainProposalSectoin = () => {
    return (
        <section className="main-proposal-section" id="our-offer-point">
            <div className="container main-proposal-section__container">
                <div className="main-proposal-block scroll-animate">
                    <img src={burgerKing} alt="burger"
                         className="main-dish-image"/>
                </div>
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
                        <Button />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainProposalSectoin;