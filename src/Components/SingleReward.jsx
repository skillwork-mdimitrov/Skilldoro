import {Button, Card} from "react-bootstrap";

const SingleReward = ({rewardImage, rewardName, rewardPoints, rewardDescription, onClick }) =>
    <Card className="mt-4" style={{ width: '20rem' }}>
        <Card.Img variant="top" src={rewardImage} style={{height: '200px'}} />
        <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>{rewardName}</Card.Title>
            <Card.Subtitle>{rewardPoints} Points</Card.Subtitle>
            <Card.Text>
                {rewardDescription}
            </Card.Text>
            <Button onClick={onClick} variant="success" className="text-uppercase fw-bold px-5">Get</Button>
        </Card.Body>
    </Card>

export default SingleReward;
