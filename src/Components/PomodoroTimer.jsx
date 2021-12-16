import {ButtonGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const PomodoroTimer = () =>
  <div className="pomodoro-container d-inline-flex flex-column align-content-center">
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Pomodoro</Button>
      <Button variant="secondary">Short break</Button>
      <Button variant="secondary">Long break</Button>
    </ButtonGroup>
    <h2 className="text-center">25:00</h2>
    <div className="btn-actions d-flex justify-content-around">
      <Button variant="success" className="w-50">Start</Button>
      <Button variant="danger" className="w-50">Stop</Button>
    </div>
  </div>

export default PomodoroTimer;