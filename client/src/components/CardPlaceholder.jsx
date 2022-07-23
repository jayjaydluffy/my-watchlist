import { Card, Placeholder } from "react-bootstrap";

const CardPlaceholder = () => {
  return (
    <>
      <Placeholder as={Card.Header} animation="wave">
        <Placeholder as="h3" bg="secondary" className="mb-0" xs={12} />
      </Placeholder>
      <Placeholder as={Card.Body} animation="wave">
        <Placeholder as="span" bg="secondary" xs={12} />
        <Placeholder as="span" bg="secondary" xs={6} />{" "}
        <Placeholder as="span" bg="secondary" xs={3} />
      </Placeholder>
    </>
  );
};
export default CardPlaceholder;
