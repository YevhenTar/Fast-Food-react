import Button from "../../ui/Button/Button";
import type  { DishCardProps } from "../../types/dishCardProps";
import "./MainCard.scss";

const MainCard = ({ customSelector, imageLink, headline, description, price }: DishCardProps) => {
    return (
        <div className={`dish-block scroll-animate ${customSelector ?? ""}`}>
            <div className="dish-block__image-wrap">
                <img src={imageLink} alt={headline} className="dish-block__image" />
            </div>

            <div className="dish-block__text-wrap">
                <h4 className="dish-block__headline">{headline}</h4>
                <p className="dish-block__text">{description}</p>

                {price !== undefined && (
                    <div className="price-box dish-block__price-box">
                        <p className="real-price">${price}</p>
                    </div>
                )}

                <Button />
            </div>
        </div>
    );
};

export default MainCard;