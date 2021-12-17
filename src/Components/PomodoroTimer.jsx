import Button from "react-bootstrap/Button";
import Countdown from 'react-countdown';
import {useRef, useState} from "react";
import {useBrowserNotifications} from 'use-browser-notifications';
import PomodoroCompletion from "./PomodoroCompletion";
import {ButtonGroup} from "react-bootstrap";

const PomodoroTimer = ({collectPoints}) => {
  const PLUS = {
    "25_mins": 2000,
    "10_mins": 2000,
    "5_mins": 2000,
  }
  const [countdown, setCountdown] = useState(Date.now() + 1500000);
  const [timerType, setTimerType] = useState("pomodoro");
  const countdownTimer = useRef(null);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);

  const workOrBreak = () => timerType === "pomodoro" ? "break" : "work";

  const {show} = useBrowserNotifications({
    title: 'Skilldoro says',
    body: `It's time for ${workOrBreak()}!`,
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
    <div className="pomodoro-container d-flex flex-column align-content-center position-relative">
      <PomodoroCompletion isTimerCompleted={isTimerCompleted}/>
      <Button
        variant="secondary"
        onClick={() => setTimer("pomodoro")}
      >
        Pomodoro
      </Button>
      <Countdown
        autoStart={false}
        ref={countdownTimer}
        daysInHours
        date={countdown}
        onComplete={onTimerFinish}
        className="text-center"
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
    </div>
  )
}


export default PomodoroTimer;
