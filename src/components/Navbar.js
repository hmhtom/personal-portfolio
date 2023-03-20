import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header({ handlePageChange }) {
  const links = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <Navbar className="navbar-dark bg-dark user-select-none" sticky="top">
      <Container>
        <Nav className="me-auto">
          {links.map((link) => (
            <Nav.Link href={"#" + link} onClick={() => handlePageChange(link)}>
              {link}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
