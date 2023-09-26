import { Fragment } from "react";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <HomePage />
    </Fragment>
  );
}

export default App;
