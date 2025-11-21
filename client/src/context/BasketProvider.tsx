import { useState } from "react";
import type { ReactNode } from "react";
import { BasketContext } from "./BasketContext";
import type { BasketItemType } from "./BasketContext"

interface BasketProviderProps {
    children: ReactNode;
}


export const BasketProvider = ({ children }: BasketProviderProps) => {
    const [basketItems, setBasketItems] = useState<BasketItemType[]>([]);
    const [goodsCounter, setGoodsCounter] = useState<number>(0);

    const addItem = (item: Omit<BasketItemType, "quantity">) => {
        // 1) Увеличиваем глобальный счётчик товаров
        setGoodsCounter(prev => prev + 1);

        // 2) Добавляем товар в массив basketItems
        setBasketItems(prev => {
            const existing = prev.find(i => i.id === item.id);

            if (existing) {
                // если товар уже есть → увеличиваем его quantity
                return prev.map(i =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }

            // если товара нет → добавляем с quantity = 1
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const increaseItem = (id: number) => {
        setBasketItems(prev => {
            const updated = prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
            return updated;
        });
        setGoodsCounter(prev => prev + 1);
    };

    const decreaseItem = (id: number) => {
        setBasketItems(prev => {
            const updated = prev.map(item =>
                item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
            return updated;
        });
        setGoodsCounter(prev => (prev > 0 ? prev - 1 : 0));
    };

    const removeItem = (id: number) => {
        const item = basketItems.find(i => i.id === id);

        if (item) {
            // Уменьшаем счетчик на количество удаляемых товаров
            setGoodsCounter(prev => prev - item.quantity);
        }

        setBasketItems(prev => prev.filter(i => i.id !== id));
    };

    const clearBasket = () => {
        setBasketItems([]);
        setGoodsCounter(0);
    };

    const isFilled = goodsCounter > 0;

    return (
    <BasketContext.Provider
        value={{
            basketItems,
            goodsCounter,
            isFilled,
            addItem,
            increaseItem,
            decreaseItem,
            removeItem,
            clearBasket
        }}
    >
        {children}
    </BasketContext.Provider>
    );
};