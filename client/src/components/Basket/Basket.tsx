import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import BasketItem from "../BasketItem/BasketItem";
import { useNavigate } from "react-router-dom";
import "./Basket.scss";

const Basket = () => {
    const basket = useContext(BasketContext);
    const navigate = useNavigate();

    if (!basket) return null;

    const { basketItems } = basket;

    const onClose = () => {
        navigate("/"); // переход на главную
    };

    return (
        <div className="basket-overlay" onClick={onClose}>
            <div className="basket-popup" onClick={(e) => e.stopPropagation()}>
                
                <button className="basket-popup__close" onClick={onClose}>
                    ✕
                </button>

                <h2 className="basket-popup__title">Your Cart</h2>

                {basketItems.length === 0 ? (
                    <p className="basket-popup__empty">The cart is empty</p>
                ) : (
                    <div className="basket-popup__items">
                        {basketItems.map((item) => (
                            <BasketItem key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Basket;

