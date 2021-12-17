import {Route, Routes} from "react-router-dom";

import './styles/App.scss';
import CheckPoints from "./Pages/CheckPoints";
import Home from "./Pages/Home";
import Rewards from "./Pages/Rewards";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/check-points" element={<CheckPoints />} />
            <Route path="/rewards" element={<Rewards />} />
        </Routes>
    </div>
  );
}

export default App;
