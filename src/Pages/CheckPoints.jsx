import Header from "../Components/Header";
import {Button} from "react-bootstrap";

const CheckPoints = () => (
  <>
      <Header />

      <div className="check-points d-flex flex-column align-items-center">
          <div className="d-flex my-4">
              <input type="text"/>
              <Button variant="success">Check Your Points</Button>
          </div>

          <span>Hello Peter, your points are: <strong>7227</strong></span>
      </div>

  </>
);
export default CheckPoints;
