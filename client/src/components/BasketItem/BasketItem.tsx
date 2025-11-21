import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import "./BasketItem.scss";

interface BasketItemProps {
    item: {
        id: number;
        title: string;
        price: number;
        image: string;
        quantity: number;
    };
}

const BasketItem = ({ item }: BasketItemProps) => {
    const basket = useContext(BasketContext);

    if (!basket) return null;

    const { increaseItem, decreaseItem, removeItem } = basket;

    return (
        <div className="basket-item">
            <img className="basket-item__img" src={item.image} alt={item.title} />

            <div className="basket-item__info">
                <p className="basket-item__title">{item.title}</p>
                <p className="basket-item__price">{item.price} $</p>
            </div>

            <div className="basket-item__controls">
                <button 
                    className="basket-item__btn"
                    onClick={() => decreaseItem(item.id)}
                    disabled={item.quantity === 1}
                >
                    –
                </button>

                <span className="basket-item__qty">{item.quantity}</span>

                <button 
                    className="basket-item__btn"
                    onClick={() => increaseItem(item.id)}
                >
                    +
                </button>
            </div>

            <p className="basket-item__total">
                {(item.quantity * item.price).toFixed(2)} $
            </p>

            <button 
                className="basket-item__remove"
                onClick={() => removeItem(item.id)}
            >
                ✕
            </button>
        </div>
    );
};

export default BasketItem;
