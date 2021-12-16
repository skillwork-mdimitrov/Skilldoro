import './styles/App.scss';
import CheckPoints from "./Pages/CheckPoints";
import Skilldoro from "./Pages/Skilldoro";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Skilldoro />} />
            <Route path="/check-points" element={<CheckPoints />} />
        </Routes>
    </div>
  );
}

export default App;
