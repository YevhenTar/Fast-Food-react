import {useEffect} from "react";
import type {FC} from "react";
import ScrollOut from "scroll-out";
import type { ScrollOutInstance } from "scroll-out";

import Header from "../components/Header/Header.tsx";
import HomeSection from "../components/HomeSection/HomeSection.tsx";
import DishesSection from "../components/DishesSection/DishesSection.tsx";
import MainProposalSection from "../components/MainProposalSectoin/MainProposalSectoin.tsx";
import Proposals from "../components/Proposals/Proposals.tsx";
import Reviews from "../components/Reviews/Reviews.tsx";
import Footer from "../components/Footer/Footer.tsx";

const Home: FC = () => {
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
    )
}

export default Home