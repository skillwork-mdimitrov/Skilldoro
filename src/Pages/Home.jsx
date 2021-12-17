import Header from "../Components/Header"
import TimersCollection from "../Components/TimersCollection";
import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {ButtonGroup} from "react-bootstrap";
import PomodoroModal from "../Components/PomodoroModal";

/*
  TODO Sometimes doesn't start immediately
 */

const Home = ({pointsForTheDay, collectPoints}) => {
  const alertUser = e => {
    e.preventDefault();
    e.returnValue = '';
  }

  // MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    pointsForTheDay > 0 && window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser)
    }
  }, [pointsForTheDay])

  return (
    <>
      <PomodoroModal show={show} handleClose={handleClose} handleShow={handleShow}/>

      <Header pointsForTheDay={pointsForTheDay} />
      <ButtonGroup className="w-100 mb-3">
        <Button
          variant="secondary"
          onClick={handleShow}
          className="border-dark border-2"
        >
          Short break
        </Button>
        <Button
          variant="secondary"
          className="border-dark border-2"
          onClick={handleShow}
        >
          Long break
        </Button>
      </ButtonGroup>
      <TimersCollection collectPoints={collectPoints}/>
    </>
  )
}


export default Home;