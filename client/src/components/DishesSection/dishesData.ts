import type { DishCardProps } from "../../types/dishCardProps";
import chickenPaella from "../../assets/img/dish-section/chicken-paella.png";
import tacoDelMar from "../../assets/img/dish-section/taco-del-mar.png";
import bonAuPain from "../../assets/img/dish-section/bon-au-pain.png";
import pizzaHut from "../../assets/img/dish-section/pizza-hut.png";

export const dishesList: DishCardProps[] = [
        {
            customSelector: "dish-block_anim-one",
            imageLink: chickenPaella,
            headline: "Chicken Paella",
            description: "We just don't make and sell food. Good food warms.",
            price: 15
        },
                {
            customSelector: "dish-block_anim-two",
            imageLink: tacoDelMar,
            headline: "Taco Del Mar",
            description: "Taco Del Mar brings the best out of Mexican cuisine with fresh.",
            price: 25
        },
                {
            customSelector: "dish-block_anim-three",
            imageLink: bonAuPain,
            headline: "Bon Au Pain",
            description: "Bon Au Pain is a pioneer in the healthy fast food scene.",
            price: 30
        },
                {
            customSelector: "dish-block_anim-four",
            imageLink: pizzaHut,
            headline: "Pizza Hut",
            description: "Although the Pizza Hut Menu Prices have tumbled over the years.",
            price: 14
        },
];
