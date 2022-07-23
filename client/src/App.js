import { Container, Row } from "react-bootstrap";
import AddNewShow from "./components/AddNewShow";
import Nav from "./components/Navbar";
import ShowCard from "./components/ShowCard";
import WatchlistCard from "./components/WatchlistCard";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Container>
        <Row>
          <WatchlistCard />
          <ShowCard />
          <AddNewShow/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
