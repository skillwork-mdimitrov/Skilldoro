import {Button, Card} from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  min-width: 15rem;
  width: 20rem;
  flex-basis: 20%;

  @media only screen and (max-width: 1400px) {
    flex-basis: 25%;
  }
`;

const SingleReward = ({rewardImage, rewardName, rewardPoints, rewardDescription, onClick }) =>
    <StyledCard className="mt-4 text-black">
        <Card.Img variant="top" src={rewardImage} style={{height: '200px'}} />
        <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>{rewardName}</Card.Title>
            <Card.Subtitle>{rewardPoints} Points</Card.Subtitle>
            <Card.Text>
                {rewardDescription}
            </Card.Text>

        </Card.Body>
        <Card.Footer className="text-center border-0 bg-white">
            <Button onClick={onClick} variant="success" className="text-uppercase fw-bold px-5">Get</Button>
        </Card.Footer>
    </StyledCard>

export default SingleReward;
