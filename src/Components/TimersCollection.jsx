import PomodoroTimer from "./PomodoroTimer";

const TimersCollection = ({collectPoints}) => {
    const pomodoroArr = [
        <PomodoroTimer collectPoints={collectPoints}/>,
        <PomodoroTimer collectPoints={collectPoints}/>,
        <PomodoroTimer collectPoints={collectPoints}/>,
        <PomodoroTimer collectPoints={collectPoints} isTimerLocked/>,
        <PomodoroTimer collectPoints={collectPoints} isTimerLocked/>,
        <PomodoroTimer collectPoints={collectPoints} isTimerLocked/>,
        <PomodoroTimer collectPoints={collectPoints} isTimerLocked/>,
        <PomodoroTimer collectPoints={collectPoints} isTimerLocked/>,
        <PomodoroTimer collectPoints={collectPoints} isTimerLocked/>
    ]

    return (
      <main className="d-flex gap-5 flex-wrap justify-content-center">
        {pomodoroArr}
      </main>
    )
}


export default TimersCollection;