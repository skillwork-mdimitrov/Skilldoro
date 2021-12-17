import Button from 'react-bootstrap/Button';
import {Breadcrumb} from "react-bootstrap";
import {ImUpload} from 'react-icons/im';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {getUserData, writeUserData} from "../utils/firebase";

const StyledLinks = styled(Breadcrumb.Item)`
  a {
    color: #B2E1FB;
    text-decoration: none;
    
    &:hover{
      text-decoration: underline;
    }
  }
`;

const StyledButtons = styled(Button)`
  background-color: #B2E1FB;
  color: black;
  
  &:hover{
    background-color: #B2E1FB;
    color: white;
    font-weight: bold;
  }
  &:focus{
    background-color: black;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  }
`;

const StyledHeading = styled.h1`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Header = ({pointsForTheDay, resetPoints}) => {
  const onUpload = () => {
    if(pointsForTheDay > 0) {
      prompt("Please enter your two names");
      writeUserData(
        "1",
        "Maksim Dimitrov",
        parseInt(getUserData() + pointsForTheDay)
      );
      resetPoints();
      alert("Points successfully added");
    } else {
      alert("Complete at least 1 pomodoro first");
    }
  }

  return (
    <header className="d-flex justify-content-around align-items-center flex-wrap-reverse flex-lg-nowrap mb-3">
      <div style={{flexBasis: "33%"}} className="points-container d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <span title="Don't forget to upload your points before leaving">
            Points: {pointsForTheDay} - 
          </span>
          <StyledButtons className="d-inline-flex align-items-center gap-2 p-1 border-dark">
            <span onClick={onUpload}>Upload</span>
            <ImUpload />
          </StyledButtons>
        </div>
      </div>
      <StyledHeading style={{flexBasis: "33%"}} className="text-white pt-2 d-flex justify-content-center">Skilldoro™</StyledHeading>

      <Breadcrumb className="py-3 py-lg-0 d-flex justify-content-center" style={{flexBasis: "33%"}}>
        <StyledLinks>
          <Link to="/">Home</Link>
        </StyledLinks>
        <StyledLinks>
          <Link to="/check-points">Check points</Link>
        </StyledLinks>
        <StyledLinks>
          <Link to="/rewards">Rewards</Link>
        </StyledLinks>
      </Breadcrumb>
    </header>
  )
}

export default Header;

/*
  header
    div.points-container
    h1.skilldoro
    <Tabs>
      <Tab/> * 3
 */
