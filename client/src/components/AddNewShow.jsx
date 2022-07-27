import { useEffect, useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useAddShowMutation } from "../store/watchlist/api";
import { cancelAddShow } from "../store/watchlist/slice";

const AddNewShow = () => {
  const { darkMode, addNewShow } = useSelector(({ util, watchlist }) => ({
    darkMode: util.darkMode,
    addNewShow: watchlist.isAddNew,
  }));
  const [dispatchAddShow, { isLoading: isAdding }] = useAddShowMutation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleClearForm = () => {
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    return () => {
      handleClearForm();
    };
  }, []);

  if (!addNewShow) {
    return null;
  }

  const handleChangeTitle = (e) => {
    const valueTitle = e.target.value;
    setTitle(valueTitle);
  };

  const handleChangeDescription = (e) => {
    const valueDescription = e.target.value;
    setDescription(valueDescription);
  };

  const handleCancelAdd = () => {
    dispatch(cancelAddShow());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatchAddShow({ title, description });
    handleClearForm();
  };

  return (
    <Col lg={8} xl={7}>
      <Card
        bg={!darkMode ? "light" : "dark"}
        text={!darkMode ? "dark" : "light"}
      >
        <Card.Header as="h3">Add show to your watchlist</Card.Header>
        <Form onSubmit={handleSubmit} id="add-show-form">
          <Card.Body>
            <Form.Group className="mb-3" controlId="show-title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                required
                placeholder="Enter title"
                onChange={handleChangeTitle}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="show-description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={description}
                required
                as="textarea"
                rows={3}
                placeholder="Enter description"
                onChange={handleChangeDescription}
              />
            </Form.Group>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button variant="link" onClick={handleCancelAdd}>
              Cancel
            </Button>
            <Button disabled={isAdding} type="submit">
              {isAdding ? "Adding show..." : "Add show"}
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </Col>
  );
};
export default AddNewShow;
