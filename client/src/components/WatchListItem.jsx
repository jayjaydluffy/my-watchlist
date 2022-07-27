import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectShow } from "../store/watchlist/slice";

const WatchListItem = ({ show }) => {
  const dispatch = useDispatch();

  const handleSelectShow = (showId) => {
    dispatch(selectShow(showId));
  };

  return (
    <ListGroup.Item
      key={show._id}
      action
      onClick={() => handleSelectShow(show._id)}
    >
      {show.title}
    </ListGroup.Item>
  );
};
export default WatchListItem;
