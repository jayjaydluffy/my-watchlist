import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/util/slice";

const DarkModeToggle = () => {
  const darkMode = useSelector(({ util }) => util?.darkMode);
  const dispatch = useDispatch();

  const handleOnToggle = () => {
    dispatch(toggleDarkMode())
  };

  useEffect(() => {
    darkMode
      ? document.documentElement.setAttribute("darkMode", "")
      : document.documentElement.removeAttribute("darkMode", "");
  }, [darkMode])
  

  return (
    <Form.Check
      type="switch"
      id="toggle-darkmode"
      label="Dark Mode"
      value={darkMode}
      onChange={handleOnToggle}
    />
  );
};
export default DarkModeToggle;
