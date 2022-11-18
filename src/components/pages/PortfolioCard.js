import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function PortfolioCard({ project }) {
  return (
    <Col className="my-3 col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          src={`./Assets/images/${project.imgURL}.png`}
          alt="Card image"
          style={{ filter: `blur(6px)` }}
        />
        <Card.ImgOverlay>
          <Card.Title as="h4">{project.projectName}</Card.Title>
          <Card.Body>
            <Card.Text>{project.type}</Card.Text>
            <Card.Link href={project.deployed} target="_blank">
              View Project
            </Card.Link>
            <Card.Link href={project.github} target="_blank">
              View Github
            </Card.Link>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}

export default PortfolioCard;
