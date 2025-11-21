import "./DishesSection.scss";
import MainCard from "../MainCard/MainCard";
import { dishesList } from "./dishesData";

const DishesSection = () => {
    return (
        <section className="dishes-section" id="blog-point">
            <div className="container dishes-section__container">
                {dishesList.map((dish) => (
                    <MainCard
                        key={dish.headline}
                        {...dish}
                    />
                ))}
            </div>
        </section>
    );
};

export default DishesSection;