import {Route, Routes} from "react-router-dom";
import './styles/App.scss';
import CheckPoints from "./Pages/CheckPoints";
import Home from "./Pages/Home";
import Rewards from "./Pages/Rewards";
import {useState} from "react";
import firebase from "./utils/firebase";

function App() {
  const [pointsForTheDay, setPointsForTheDay] = useState(0);
  const resetPoints = () => setPointsForTheDay(0);
  const collectPoints = () =>
    setPointsForTheDay(pointsForTheDay + 10);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              pointsForTheDay={pointsForTheDay}
              resetPoints={resetPoints}
              collectPoints={collectPoints}/>
          }
        />
        <Route path="/check-points" element={<CheckPoints pointsForTheDay={pointsForTheDay}/>} />
        <Route path="/rewards" element={<Rewards pointsForTheDay={pointsForTheDay}/>} />
      </Routes>
    </div>
  );
}

export default App;
