import {Modal} from "react-bootstrap";

const PomodoroModal = ({show, handleClose, timerType}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Body class="fs-1">
          05:00
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PomodoroModal;