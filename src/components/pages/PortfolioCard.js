import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function PortfolioCard({ project }) {
  return (
    <Col className="my-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img src={`./Assets/images/test1.jpg`} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title as="h4">{project.projectName}</Card.Title>
          <Card.Body>
            <Card.Text>{project.type}</Card.Text>
            <Card.Link href={project.deployed}>View Project</Card.Link>
            <Card.Link href={project.github}>View Github</Card.Link>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}

export default PortfolioCard;
