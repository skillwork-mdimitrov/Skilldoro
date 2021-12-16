import PomodoroTimer from "./PomodoroTimer";

const TimersCollection = () =>
  <main className="d-flex gap-5 flex-wrap justify-content-center">
    <PomodoroTimer />
    <PomodoroTimer />
    <PomodoroTimer />
    <PomodoroTimer />
    <PomodoroTimer />
    <PomodoroTimer />
    <PomodoroTimer />
    <PomodoroTimer />
  </main>

export default TimersCollection;

/*
  main
    div.pomodoro-container
      div.period
      div.timer
      div.btn-container
 */