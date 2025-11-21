import { useEffect } from "react";
import { BasketProvider } from "./context/BasketProvider.tsx";
import Loader from "./components/Loader/Loader.tsx";
import AppRouter from "./components/AppRouter";




function App() {
    useEffect(() => {
        const onLoad = ():void => {
            document.body.classList.add('loaded_hiding');
            setTimeout(():void => {
                document.body.classList.add('loaded');
                document.body.classList.remove('loaded_hiding');
            }, 700);
        };

        if (document.readyState === 'complete') {
            onLoad(); // Страница уже загружена
        } else {
            window.addEventListener('load', onLoad);
        }

        return () => {
            window.removeEventListener('load', onLoad);
        };
    }, []);



    return (
        <BasketProvider>
            <Loader />
            <AppRouter />
        </BasketProvider>
    )
}

export default App
