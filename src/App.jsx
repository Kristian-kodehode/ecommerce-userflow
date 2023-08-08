import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./routes/navigation/navigation.route";
import Step1 from "./routes/step1/step1.route";
import Step2 from "./routes/step2/step2.route";
import Step3 from "./routes/step3/step3.route";
import Step4 from "./routes/step4/step4.route";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Navigation}>
          <Route index element={Step1} />
          <Route path="step2" element={Step2} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
