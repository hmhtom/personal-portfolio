import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <>
      <Col className="col-md-12 col-lg-6">
        <Image src="./Assets/images/avatar.jpg" roundedCircle thumbnail />
      </Col>
      <Col className="col-md-12 col-lg-6 fs-4">
        Hi Im Alex, I am a full stack developer currently studying in U of T.
      </Col>
    </>
  );
}

export default About;
