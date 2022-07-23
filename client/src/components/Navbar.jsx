import { Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import DarkModeToggle from "./DarkModeToggle";

const Nav = () => {
  const darkMode = useSelector(({ util }) => util?.darkMode);
  return (
    <Navbar
      bg={!darkMode ? "light" : "dark"}
      variant={!darkMode ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand as="h1" href="#">
          RTK+Query Demo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <DarkModeToggle />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Nav;
