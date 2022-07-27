import { useCallback, useEffect } from "react";
import { Button, Card, Col, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import * as watchlistActions from "../store/watchlist/actions";
import WatchListItem from "./WatchListItem";

const WatchlistCard = () => {
  const {
    watchlist: { fetching, fetched, fetchingError, watchlist },
    darkMode,
  } = useSelector(({ watchlist, util }) => ({
    darkMode: util.darkMode,
    watchlist: watchlist,
  }));

  const dispatch = useDispatch();

  const fetchWatchlist = useCallback(async () => {
    if (!fetching && !fetched && !fetchingError) {
      await dispatch(watchlistActions.fetchWatchlist());
    }
  }, [dispatch, fetching, fetched, fetchingError]);

  useEffect(() => {
    fetchWatchlist();
  }, [fetchWatchlist]);

  const handleAddNewShow = (showId) => {
    dispatch(watchlistActions.addNewShow());
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
        {fetching && <Card.Body>Fetching...</Card.Body>}
        {fetched && (
          <ListGroup variant="flush">
            {watchlist.map((show) => (
              <WatchListItem key={show._id} show={show} />
            ))}
          </ListGroup>
        )}
        {fetchingError && "We have error"}
      </Card>
    </Col>
  );
};
export default WatchlistCard;
