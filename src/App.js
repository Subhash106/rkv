import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Home from "./components/Home";
import Backdrop from "./components/shared/Backdrop";
const App = () => {
  //   return (
  //     <div>
  //       <h1>Hello there</h1>
  //       <Backdrop />
  //     </div>
  //   );
  return <Home />;
};

export default hot(module)(App);
