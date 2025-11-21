import { createContext} from "react";

export interface BasketItemType {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

export interface BasketContextProps {
    basketItems: BasketItemType[];
    goodsCounter: number;
    isFilled: boolean;

    addItem: (item: BasketItemType) => void;
    increaseItem: (id: number) => void;
    decreaseItem: (id: number) => void;
    removeItem: (id: number) => void;
    clearBasket: () => void;
}

export const BasketContext = createContext<BasketContextProps | null>(null);