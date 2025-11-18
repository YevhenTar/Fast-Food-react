import "./DishesSection.scss";
import chickenPaella from "../../assets/img/dish-section/chicken-paella.png";
import tacoDelMar from "../../assets/img/dish-section/taco-del-mar.png";
import bonAuPain from "../../assets/img/dish-section/bon-au-pain.png";
import pizzaHut from "../../assets/img/dish-section/pizza-hut.png";
import Button from "../../ui/Button/Button";

const DishesSection = () => {
    return (
        <section className="dishes-section" id="blog-point">
            <div className="container dishes-section__container">
                <div className="dish-block dish-block_anim-one scroll-animate">
                    <div className="dish-block__image-wrap">
                        <img src={chickenPaella} alt="dish"
                             className="dish-block__image"/>
                    </div>
                    <div className="dish-block__text-wrap">
                        <h4 className="dish-block__headline">Chicken Paella</h4>
                        <p className="dish-block__text">We just don't make and sell food. Good food warms.</p>
                        <Button />
                    </div>
                </div>
                <div className="dish-block dish-block_anim-two scroll-animate">
                    <div className="dish-block__image-wrap">
                        <img src={tacoDelMar} alt="dish"
                             className="dish-block__image"/>
                    </div>
                    <div className="dish-block__text-wrap">
                        <h4 className="dish-block__headline">Taco Del Mar</h4>
                        <p className="dish-block__text">Taco Del Mar brings the best out of Mexican cuisine with
                            fresh.</p>
                        <Button />
                    </div>
                </div>
                <div className="dish-block dish-block_anim-three scroll-animate">
                    <div className="dish-block__image-wrap">
                        <img src={bonAuPain} alt="dish"
                             className="dish-block__image"/>
                    </div>
                    <div className="dish-block__text-wrap">
                        <h4 className="dish-block__headline">Bon Au Pain</h4>
                        <p className="dish-block__text">Bon Au Pain is a pioneer in the healthy fast food
                            scene.</p>
                        <Button />
                    </div>
                </div>
                <div className="dish-block dish-block_anim-four scroll-animate">
                    <div className="dish-block__image-wrap">
                        <img src={pizzaHut} alt="dish"
                             className="dish-block__image"/>
                    </div>
                    <div className="dish-block__text-wrap">
                        <h4 className="dish-block__headline">Pizza Hut</h4>
                        <p className="dish-block__text">Although the Pizza Hut Menu Prices have tumbled over the
                            years.</p>
                        <Button />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DishesSection;