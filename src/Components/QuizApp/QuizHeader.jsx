import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

function QuizHeader() {
  const linkStyle = {
    textDecoration: "none",
    marginLeft: "20px",
  };
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Online Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink
              style={
                (({ isActive }) => (isActive ? activeStyle : undefined),
                linkStyle)
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={
                (({ isActive }) => (isActive ? activeStyle : undefined),
                linkStyle)
              }
              to="/topic"
            >
              Topic
            </NavLink>
            <NavLink
              style={
                (({ isActive }) => (isActive ? activeStyle : undefined),
                linkStyle)
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              style={
                (({ isActive }) => (isActive ? activeStyle : undefined),
                linkStyle)
              }
              to="/attempts"
            >
              Attempts
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default QuizHeader;
