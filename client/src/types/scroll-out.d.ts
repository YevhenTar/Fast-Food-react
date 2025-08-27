declare module "scroll-out" {
    export interface ScrollOutOptions {
        /** CSS-селектор элементов, за которыми следить */
        targets?: string | Element[] | NodeListOf<Element>;

        /** Выполнять только один раз при первом показе */
        once?: boolean;

        /** Коллбек при показе */
        onShown?(element: Element): void;

        /** Коллбек при скрытии */
        onHidden?(element: Element): void;

        /** Настройки отступов (margin/padding окна) */
        offset?: number | string;

        /** Частота обновлений (ms) */
        throttle?: number;

        /** События, которые запускают проверку */
        events?: string;
    }

    export interface ScrollOutInstance {
        index(): void;       // пересчитать список элементов
        update(): void;      // вручную обновить состояние
        teardown(): void;    // убрать слушатели
    }

    const ScrollOut: (options?: ScrollOutOptions) => ScrollOutInstance;

    export default ScrollOut;
}
