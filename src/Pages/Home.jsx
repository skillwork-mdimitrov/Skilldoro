import Header from "../Components/Header"
import TimersCollection from "../Components/TimersCollection";
import {useState} from "react";

const Home = () => {
  const [pointsForTheDay, setPointsForTheDay] = useState(0);
  const collectPoints = () =>
    setPointsForTheDay(pointsForTheDay + 10);

  return (
    <>
      <Header pointsForTheDay={pointsForTheDay} />
      <TimersCollection collectPoints={collectPoints}/>
    </>
  )
}


export default Home;