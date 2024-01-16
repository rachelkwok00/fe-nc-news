import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import AllTopics from "./AllTopics";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavigationBar() {
  const { signInState, usernameState } = useContext(UserContext);
  const [signIn] = signInState;
  const [username] = usernameState;

  return (
    <>
      <Navbar
        style={{ backgroundColor: "rgb(107, 128, 232)" }}
        data-bs-theme="dark"
        className="mb-4"
      >
        <Container>
          <Nav className="nav-container">
            <div className="nav-route-container">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/articles">
                All Articles
              </Nav.Link>

              <NavDropdown title="Topics">
                <AllTopics />
              </NavDropdown>
            </div>
            <div className="margin-left: auto">
              <Nav.Link as={Link} to="/account" id="username-container">
                {signIn ? `Signed in as: ${username}` : "Sign In"}
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
