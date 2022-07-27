import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useUpdateShowMutation } from "../store/watchlist/api";

const EditShowForm = ({ showId, show, cancelEditHandler }) => {
  const [title, setTitle] = useState(show?.title);
  const [description, setDescription] = useState(show?.description);
  const [dispatchUpdateShow, { isLoading }] = useUpdateShowMutation();

  useEffect(() => {
    setTitle(show?.title);
    setDescription(show?.description);
  }, [show]);

  const handleChangeTitle = (e) => {
    const valueTitle = e.target.value;
    setTitle(valueTitle);
  };

  const handleChangeDescription = (e) => {
    const valueDescription = e.target.value;
    setDescription(valueDescription);
  };

  const handleCancelEdit = () => {
    cancelEditHandler();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatchUpdateShow({ showId, title, description }).unwrap();
      cancelEditHandler();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} id="edit-show-form">
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
        <Button variant="link" disabled={isLoading} onClick={handleCancelEdit}>
          Cancel
        </Button>
        <Button type="submit">{isLoading ? "Updating..." : "Update"}</Button>
      </Card.Footer>
    </Form>
  );
};
export default EditShowForm;
