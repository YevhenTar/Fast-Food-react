import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import "./BasketButton.scss";
import basketLogo from '../../assets/img/body/template-basket-icon.png';

const BasketButton = () => {
    const basket = useContext(BasketContext);
    if (!basket) {
        console.error("BasketContext is not available");
        return null;
    }

    const { goodsCounter, isFilled} = basket;

    return (
        <a className="basket-button" href="#">
            <img className="basket-button__img" src={basketLogo} alt="basket" />
            {isFilled && (
                    <p className="basket-button__goods-counter goods-counter">{goodsCounter}</p>
                )
            }
        </a>
    )
}

export default BasketButton