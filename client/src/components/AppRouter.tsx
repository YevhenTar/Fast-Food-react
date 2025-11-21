import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import BasketPage from "../pages/BasketPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<BasketPage />} />
        </Routes>
    );
};

export default AppRouter;