import Button from 'react-bootstrap/Button';
import {Breadcrumb} from "react-bootstrap";
import {ImUpload} from 'react-icons/im';
import {Link} from "react-router-dom";

const Header = ({pointsForTheDay}) => {
  return (
    <header className="d-flex justify-content-around align-items-center m-2 mb-3">
      <div className="points-container">
        <div className="d-flex align-items-center">
          <span title="Don't forget to upload your points before leaving">
            Points: {pointsForTheDay} - 
          </span>
          <Button variant="light"
                  className="d-inline-flex align-items-center gap-2 p-1 border-dark">
            <span>Upload</span>
            <ImUpload />
          </Button>
        </div>
      </div>
      <h1>Skilldoro™</h1>

      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/check-points">Check points</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/rewards">Rewards</Link>
        </Breadcrumb.Item>
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
