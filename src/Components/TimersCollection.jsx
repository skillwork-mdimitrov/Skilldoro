import PomodoroTimer from "./PomodoroTimer";
import {useState} from "react";

const TimersCollection = ({collectPoints}) => {
    const [unlockedDoroIndex, setUnlockedDoroIndex] = useState(0);
    const unlockNextDoro = () =>
      setUnlockedDoroIndex(unlockedDoroIndex + 1);

    const doroFactory = () => {
        const doroArr = [];
        for(let i=0; i<=8; i++) {
            doroArr.push(
                <PomodoroTimer
                  key={i}
                  collectPoints={collectPoints}
                  currentDoroIndex={i}
                  unlockedDoroIndex={unlockedDoroIndex}
                  unlockNextDoro={unlockNextDoro}
                />
            )
        }
        return doroArr;
    }

    return (
      <main className="d-flex gap-5 flex-wrap justify-content-center">
        {doroFactory()}
      </main>
    )
}


export default TimersCollection;