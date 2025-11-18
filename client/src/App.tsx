import {useEffect} from "react";
import { BasketProvider } from "./context/BasketProvider.tsx";
import ScrollOut from "scroll-out";
import type { ScrollOutInstance } from "scroll-out";
import Loader from "./components/Loader/Loader.tsx";
import Header from "./components/Header/Header.tsx";
import HomeSection from "./components/HomeSection/HomeSection.tsx";
import DishesSection from "./components/DishesSection/DishesSection.tsx";
import MainProposalSection from "./components/MainProposalSectoin/MainProposalSectoin.tsx";
import Proposals from "./components/Proposals/Proposals.tsx";
import Reviews from "./components/Reviews/Reviews.tsx";
import Footer from "./components/Footer/Footer.tsx";



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

    useEffect(() => {
        const so: ScrollOutInstance = ScrollOut({
        targets: ".scroll-animate",
        once: true,
        onShown(el) {
            el.classList.add("new-animate");
        },
        });

        return () => so.teardown();
    }, []);

    return (
        <BasketProvider>
            <Loader />
            <div className="wrapper">
                <Header />
                <main className="main-content">
                    <HomeSection />
                    <DishesSection />
                    <MainProposalSection />
                    <Proposals />
                    <Reviews />
                </main>
                <Footer />
            </div>
        </BasketProvider>
    )
}

export default App
