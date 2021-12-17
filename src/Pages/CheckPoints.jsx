import Header from "../Components/Header";
import {Button} from "react-bootstrap";
import styled from "styled-components";

const StyledCheckPoints = styled.div`
  background-image: url("https://img5.goodfon.com/wallpaper/nbig/c/f3/synth-retrowave-synthwave-new-retro-wave-sintveiv-retrove-14.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  min-height: 100vh;
`;

const CheckPoints = ({pointsForTheDay}) => (
  <StyledCheckPoints>
    <Header pointsForTheDay={pointsForTheDay}/>
    <div className="check-points d-flex flex-column align-items-center">
        <div className="d-flex my-4">
            <input type="text"/>
            <Button variant="success">Check Your Points</Button>
        </div>
    </div>
  </StyledCheckPoints>
);
export default CheckPoints;
