import {ButtonGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Countdown from 'react-countdown';
import {useRef, useState} from "react";

const PomodoroTimer = () => {
  const [countdown, setCountdown] = useState(Date.now() + 1500000);
  const countdownTimer = useRef(null);

  /**
   * Choose between ↓
   * pomodoro
   * short_break
   * long_break
   */
  const setTimer = (timer_type) => {
    switch (timer_type) {
      case "pomodoro":
        setCountdown(Date.now() + 1500000);
        break;
      case 'short_break':
        setCountdown(Date.now() + 300000);
        break;
      case 'long_break':
        setCountdown(Date.now() + 600000);
        break;
      default:
        setCountdown(Date.now() + 1500000);
        break;
    }
  }

  return (
    <div className="pomodoro-container d-inline-flex flex-column align-content-center">
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="secondary"
          onClick={() => setTimer("pomodoro")}
        >
          Pomodoro
        </Button>
        <Button
          variant="secondary"
          onClick={() => setTimer("short_break")}
        >
          Short break
        </Button>
        <Button
          variant="secondary"
          onClick={() => setTimer("long_break")}
        >
          Long break
        </Button>
      </ButtonGroup>
      <Countdown
        ref={countdownTimer}
        daysInHours
        date={countdown}
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
          >Stop</Button>
      </div>
    </div>
  )
}


export default PomodoroTimer;