import {useEffect} from "react";
import Loader from "./components/Loader/Loader.tsx";
import Header from "./components/Header/Header.tsx";
import HomeSection from "./components/HomeSection/HomeSection.tsx";
import DishesSection from "./components/DishesSection/DishesSection.tsx";
import MainProposalSectoin from "./components/MainProposalSectoin/MainProposalSectoin.tsx";
import Proposals from "./components/Proposals/Proposals.tsx";
import Reviews from "./components/Reviews/Reviews.tsx";
import DownloadSection from "./components/DownloadSection/DownloadSection.tsx";
import PopupOrder from "./components/Popups/PopupOrder/PopupOrder.tsx";
import PopupDownload from "./components/Popups/PopupDownload/PopupDownload.tsx";
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

  return (
      <>
        <Loader />
        <div className="wrapper">
          <Header />
          <main className="main-content">
            <HomeSection />
            <DishesSection />
            <MainProposalSectoin />
            <Proposals />
            <Reviews />
            <DownloadSection />
          </main>
          <Footer />
          <PopupOrder />
          <PopupDownload />
        </div>
      </>
  )
}

export default App
