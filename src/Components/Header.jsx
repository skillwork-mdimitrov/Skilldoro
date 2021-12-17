import Button from 'react-bootstrap/Button';
import {Breadcrumb} from "react-bootstrap";
import {ImUpload} from 'react-icons/im';
import {Link} from "react-router-dom";
import styled from "styled-components";

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

const Header = ({pointsForTheDay}) => {
  return (
    <header className="d-flex justify-content-around align-items-center mb-3">
      <div className="points-container">
        <div className="d-flex align-items-center">
          <span title="Don't forget to upload your points before leaving">
            Points: {pointsForTheDay} - 
          </span>
          <StyledButtons className="d-inline-flex align-items-center gap-2 p-1 border-dark">
            <span>Upload</span>
            <ImUpload />
          </StyledButtons>
        </div>
      </div>
      <h1 className="text-white">Skilldoro™</h1>

      <Breadcrumb>
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
