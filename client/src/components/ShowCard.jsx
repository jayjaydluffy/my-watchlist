import { useEffect } from "react";
import { Button, Card, Col, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import * as watchlistActions from "../store/watchlist/actions";
import CardPlaceholder from "./CardPlaceholder";

const ShowCard = () => {
  const {
    watchlist: { selectedShow, fetchingShow, show, fetchedShow },
    darkMode,
  } = useSelector(({ watchlist, util }) => ({
    darkMode: util.darkMode,
    watchlist: watchlist,
  }));

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (selectedShow && !fetchingShow && !fetchedShow) {
      dispatch(watchlistActions.fetchShow(selectedShow));
    }
  }, [selectedShow, dispatch, fetchingShow, fetchedShow]);

  if (!selectedShow) {
    return;
  }

  let cardContent,
    viewShow = show[selectedShow];

  if (fetchingShow && !viewShow) {
    cardContent = <CardPlaceholder />;
  }

  cardContent = (
    <>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3 className="mb-0">{viewShow?.title}</h3>
        <Stack direction="horizontal" gap={2}>
          <Button variant="secondary">Edit</Button>{" "}
          <Button variant="highlight">Delete</Button>
        </Stack>
      </Card.Header>
      <Card.Body>
        <Card.Text>{viewShow?.description || "No description"}</Card.Text>
      </Card.Body>
    </>
  );

  return (
    <Col lg={8} xl={7}>
      <Card
        bg={!darkMode ? "light" : "dark"}
        text={!darkMode ? "dark" : "light"}
      >
        {cardContent}
      </Card>
    </Col>
  );
};
export default ShowCard;
