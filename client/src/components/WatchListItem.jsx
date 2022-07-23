import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";

import * as watchlistActions from "../store/watchlist/actions";

const WatchListItem = ({ show }) => {
  const dispatch = useDispatch();

  const handleSelectShow = (showId) => {
    dispatch(watchlistActions.selectShow(showId));
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
