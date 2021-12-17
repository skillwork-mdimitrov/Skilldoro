import Button from "react-bootstrap/Button";
import Countdown from 'react-countdown';
import {useRef, useState} from "react";
import {useBrowserNotifications} from 'use-browser-notifications';
import PomodoroCompletion from "./PomodoroCompletion";
import styled from "styled-components";

const StyledTimers = styled.div`
  flex-basis: 20%;

  @media only screen and (max-width: 1400px) {
    flex-basis: 25%;
  }
`;

const StyledSpan = styled.span`
  background-color: #B2E1FB;
  border-radius: 4px;
`;

const PomodoroTimer = ({collectPoints, isTimerLocked}) => {
  const PLUS = {
    "25_mins": 2000,
    "10_mins": 2000,
    "5_mins": 2000,
  }
  const [countdown, setCountdown] = useState(Date.now() + 3000);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);
  const [timerType, setTimerType] = useState("pomodoro");
  const countdownTimer = useRef(null);

  const workOrBreak = () => timerType === "pomodoro" ? "break" : "work";

  const {show} = useBrowserNotifications({
    title: 'Skilldoro says',
    body: `It's time for a ${workOrBreak()}!`,
  });

  /**
   * Choose between ↓
   * pomodoro
   * short_break
   * long_break
   */
  const setTimer = (timer_type) => {
    switch (timer_type) {
      case "pomodoro":
        setTimerType("pomodoro");
        setCountdown(Date.now() + PLUS["25_mins"]);
        break;
      case 'short_break':
        setTimerType("short_break");
        setCountdown(Date.now() + PLUS["5_mins"]);
        break;
      case 'long_break':
        setTimerType("long_break");
        setCountdown(Date.now() + PLUS["10_mins"]);
        break;
      default:
        setCountdown(Date.now() + 1500000);
        break;
    }
  }

  const onTimerFinish = () => {
    // Update points
    timerType === "pomodoro" && collectPoints();

    // Show notif
    show();

    // Neshto
    setIsTimerCompleted(true);
  }

  return (
    <StyledTimers className="pomodoro-container d-flex flex-column align-content-center position-relative">
      <PomodoroCompletion
        isTimerCompleted={isTimerCompleted}
        isTimerLocked={isTimerLocked}
      />
      <StyledSpan className="text-center text-black fs-4">Pomodoro</StyledSpan>
      <Countdown
        autoStart={false}
        ref={countdownTimer}
        daysInHours
        date={countdown}
        onComplete={onTimerFinish}
        className="text-center fs-4"
      />
      <div className="btn-actions d-flex justify-content-around">
        <Button
          variant="success"
          className="w-50"
          onClick={() => countdownTimer.current.getApi().start()}
        >Start</Button>
        <Button
          variant="danger"
          className="w-50"
          onClick={() => countdownTimer.current.getApi().pause()}
        >Pause</Button>
      </div>
    </StyledTimers>
  )
}


export default PomodoroTimer;
