import {Modal} from "react-bootstrap";
import Countdown from "react-countdown";
import {useBrowserNotifications} from "use-browser-notifications";

const PomodoroModal = ({show, handleClose, isShortBreak}) => {
  const {show: showNotif} = useBrowserNotifications({
    title: 'Skilldoro says',
    body: `Break's up. Let's do some work!`,
  });

  const onTimerFinish = () => { showNotif(); handleClose();}

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Body className="fs-1 text-black text-center">
          <Countdown
            daysInHours
            date={Date.now() + (isShortBreak ? 5000 : 600000)}
            onComplete={onTimerFinish}
            className="text-center"
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PomodoroModal;
