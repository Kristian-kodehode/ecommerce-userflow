import { Routes, Route } from "react-router-dom";
import Layout from "./routes/layout/layout";
import { CartProvider } from "./CartContext";

import "./App.css";

import Step1 from "./routes/step1/step1.jsx";
import Step2 from "./routes/step2/step2.jsx";
import Step3 from "./routes/step3/step3.jsx";
import Step4 from "./routes/step4/step4.route.jsx";
import AboutProject from "./routes/aboutproject/aboutproject";
import ItemPage from "./routes/itemPage/itemPage.jsx";
import OverlayPage from "./routes/overlayPage/overlayPage";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/aboutproject" element={<AboutProject />} />
          <Route path="/itemPage/:itemId" element={<ItemPage />} />
          <Route path="/overlay" element={<OverlayPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
