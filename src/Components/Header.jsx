import Button from 'react-bootstrap/Button';
import { ImUpload } from 'react-icons/im';
import {Breadcrumb} from "react-bootstrap";

const Header = () => {

  return (
    <header className="d-flex justify-content-around align-items-center m-2 mb-3">
      <div className="points-container">
        <div className="d-flex align-items-center">
          <span>Points: 2000 - </span>
          <Button variant="light"
                  className="d-inline-flex align-items-center gap-2 p-1 border-dark">
            <span>Upload</span>
            <ImUpload />
          </Button>
        </div>
      </div>
      <h1>Skilldoro™</h1>

      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/check-points">Check points</Breadcrumb.Item>
        <Breadcrumb.Item href="/rewards">Rewards</Breadcrumb.Item>
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
