import { useState } from "react";
import type { ReactNode } from "react";
import { BasketContext } from "./BasketContext";

interface BasketProviderProps {
    children: ReactNode;
}


export const BasketProvider = ({ children }: BasketProviderProps) => {
    const [goodsCounter, setGoodsCounter] = useState<number>(0);

    const addItem = () => {
        setGoodsCounter(prev => prev + 1);
    };

    return (
        <BasketContext.Provider
        value={{
            goodsCounter,
            isFilled: goodsCounter > 0,
            addItem
        }}
        >
            {children}
        </BasketContext.Provider>
    );
};