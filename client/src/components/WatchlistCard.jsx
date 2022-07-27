import { Button, Card, Col, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useFetchWatchlistQuery } from "../store/watchlist/api";
import { addNewShow } from "../store/watchlist/slice";
import CardPlaceholder from "./CardPlaceholder";

import WatchListItem from "./WatchListItem";

const WatchlistCard = () => {
  const darkMode = useSelector(({ util }) => util.darkMode);
  const {
    data: watchlist,
    isLoading,
    isError,
    error,
  } = useFetchWatchlistQuery();
  const dispatch = useDispatch();

  const handleAddNewShow = () => {
    dispatch(addNewShow());
  };

  return (
    <Col className="mb-4 mb-lg-0">
      <Card
        bg={!darkMode ? "light" : "dark"}
        text={!darkMode ? "dark" : "light"}
      >
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h3 className="mb-0">My Watchlist</h3>
          <Button onClick={handleAddNewShow}>Add</Button>
        </Card.Header>
        {isLoading ? (
          <CardPlaceholder />
        ) : watchlist && watchlist.length ? (
          <ListGroup variant="flush">
            {watchlist.map((show) => (
              <WatchListItem key={show._id} show={show} />
            ))}
          </ListGroup>
        ) : (
          <Card.Body>
            {isError ? error?.message : "Watchlist is empty"}
          </Card.Body>
        )}
      </Card>
    </Col>
  );
};
export default WatchlistCard;
