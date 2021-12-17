import Header from "../Components/Header"
import TimersCollection from "../Components/TimersCollection";
import {useEffect, useState} from "react";

const Home = () => {
  const [pointsForTheDay, setPointsForTheDay] = useState(0);
  const collectPoints = () =>
    setPointsForTheDay(pointsForTheDay + 10);

  const alertUser = e => {
    e.preventDefault();
    e.returnValue = '';
  }

  useEffect(() => {
    pointsForTheDay > 0 && window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser)
    }
  }, [pointsForTheDay])

  return (
    <>
      <Header pointsForTheDay={pointsForTheDay} />
      <TimersCollection collectPoints={collectPoints}/>
    </>
  )
}


export default Home;