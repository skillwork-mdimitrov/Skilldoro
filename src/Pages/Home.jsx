import Header from "../Components/Header"
import TimersCollection from "../Components/TimersCollection";
import {useEffect} from "react";

const Home = ({pointsForTheDay, collectPoints}) => {
  const alertUser = e => {
    e.preventDefault();
    e.returnValue = 'Hello pls';
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