import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import './Button.scss';

const Button = () => {
    const basket = useContext(BasketContext);

    if(!basket) {
        console.error("BasketContext is not available");
        return null;
    }

    const { addItem } = basket;

    return (
        <button 
            className="choiсe-button"
            onClick={addItem}
        />
    )
}

export default Button