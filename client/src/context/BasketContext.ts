import { createContext} from "react";

interface BasketContextProps {
    goodsCounter: number;
    isFilled: boolean;
    addItem: () => void;
    // basketItems: any[];
    // addItem?: (item: any) => void;
    // removeItem?: (id: number) => void;
    // clearBasket?: () => void;
}

export const BasketContext = createContext<BasketContextProps | null>(null);