import styled from 'styled-components';
import {IoCheckmarkCircleSharp} from "react-icons/io5";
import {FaLock} from "react-icons/fa";

const StyledOpaqueDiv = styled.div`
  background: black;
  height: 100%;
  left: 0;
  opacity: .6;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledCheckmark = styled(IoCheckmarkCircleSharp)`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`

const StyledLocked = styled(FaLock)`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`

const PomodoroCompletion = ({isTimerCompleted = false, isTimerUnlocked}) => {
  return (
    <>
      {isTimerCompleted && (
        <>
          <StyledCheckmark color="white" fontSize="5rem"/>
          <StyledOpaqueDiv></StyledOpaqueDiv>
        </>
      )}
      {!isTimerUnlocked && (
        <div>
          <StyledLocked color="white" fontSize="5rem"/>
          <StyledOpaqueDiv></StyledOpaqueDiv>
        </div>
      )}
    </>
  );
}


export default PomodoroCompletion;