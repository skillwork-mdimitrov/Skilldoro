import PomodoroTimer from "./PomodoroTimer";

const TimersCollection = ({collectPoints}) =>
  <main className="d-flex gap-5 flex-wrap justify-content-center">
    <PomodoroTimer collectPoints={collectPoints}/>
    <PomodoroTimer collectPoints={collectPoints}/>
    <PomodoroTimer collectPoints={collectPoints}/>
    <PomodoroTimer collectPoints={collectPoints}/>
    <PomodoroTimer collectPoints={collectPoints}/>
    <PomodoroTimer collectPoints={collectPoints}/>
    <PomodoroTimer collectPoints={collectPoints}/>
    <PomodoroTimer collectPoints={collectPoints}/>
  </main>

export default TimersCollection;