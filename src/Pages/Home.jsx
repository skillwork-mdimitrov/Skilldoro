import Button from "react-bootstrap/Button";
import Header from "../Components/Header"
import PomodoroModal from "../Components/PomodoroModal";
import TimersCollection from "../Components/TimersCollection";
import styled from "styled-components";
import {ButtonGroup} from "react-bootstrap";
import {useEffect, useState} from "react";

const StyledHomePage = styled.div`
  background-image: url("https://img5.goodfon.com/wallpaper/nbig/c/f3/synth-retrowave-synthwave-new-retro-wave-sintveiv-retrove-14.jpg");
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

/*
  TODO Sometimes doesn't start immediately
 */

const Home = ({pointsForTheDay, collectPoints, resetPoints}) => {
  const alertUser = e => {
    e.preventDefault();
    e.returnValue = '';
  }

  // MODAL
  const [show, setShow] = useState(false);
  const [isShortBreak, setIsShortBreak] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setShortBreak = (isShort) => setIsShortBreak(isShort);

  useEffect(() => {
    pointsForTheDay > 0 && window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser)
    }
  }, [pointsForTheDay])

  return (
      <StyledHomePage>
        <PomodoroModal
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          isShortBreak={isShortBreak}
        />
        <Header pointsForTheDay={pointsForTheDay} resetPoints={resetPoints}/>
        <ButtonGroup className="w-100 mb-3">
          <Button
            variant="secondary"
            onClick={() => {
              handleShow();
              setShortBreak(true);
            }}
            className="border-dark border-2"
          >
            Short break
          </Button>
          <Button
            variant="secondary"
            className="border-dark border-2"
            onClick={() => {
              handleShow(false);
              setShortBreak(false);
            }}
          >
            Long break
          </Button>
        </ButtonGroup>
        <TimersCollection collectPoints={collectPoints}/>
     </StyledHomePage>
  )
}


export default Home;
