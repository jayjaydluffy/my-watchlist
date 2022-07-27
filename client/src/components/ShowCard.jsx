import { useState } from "react";
import { Button, Card, Col, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";

import {
  useDeleteShowMutation,
  useFetchShowQuery,
} from "../store/watchlist/api";
import CardPlaceholder from "./CardPlaceholder";
import EditShowForm from "./EditShowForm";

const ShowCard = () => {
  const {
    watchlist: { selectedShow },
    darkMode,
  } = useSelector(({ watchlist, util }) => ({
    darkMode: util.darkMode,
    watchlist: watchlist,
  }));

  // Fetching show
  const {
    isLoading,
    data: viewShow,
    isError,
    error,
  } = useFetchShowQuery(selectedShow, { skip: !selectedShow });

  // Delete show
  const [dispatchDeleteShow, { isLoading: isDeleting }] =
    useDeleteShowMutation();
  const [editMode, setEditMode] = useState(false);

  if (!selectedShow) {
    return;
  }

  let cardContent;

  if (isLoading) {
    cardContent = <CardPlaceholder />;
  }

  const handleDeleteShow = async () => {
    try {
      await dispatchDeleteShow(selectedShow).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  cardContent = (
    <>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3 className="mb-0">{viewShow?.title}</h3>
        <Stack direction="horizontal" gap={2}>
          {!editMode && (
            <Button variant="secondary" onClick={() => setEditMode(true)}>
              Edit
            </Button>
          )}
          <Button
            variant="highlight"
            onClick={handleDeleteShow}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </Stack>
      </Card.Header>
      {isError && (
        <Card.Body>
          <Card.Text>{error?.message}</Card.Text>
        </Card.Body>
      )}
      {editMode ? (
        <EditShowForm
          show={viewShow}
          showId={viewShow?._id}
          cancelEditHandler={() => setEditMode(false)}
        />
      ) : (
        <Card.Body>
          <Card.Text>{viewShow?.description || "No description"}</Card.Text>
        </Card.Body>
      )}
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
