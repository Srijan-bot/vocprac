import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import About from "./pages/About";
import Event from "./pages/Event";

export default function App() {
  console.log(window.location);
  let Component;

  switch (window.location.pathname) {
    case "/":
      Component = App;
      break;
    case "/about":
      Component = About;
      break;
    case "/event":
      Component = Event;
      break;
    default:
      Component = App; // Set a default component to render if the path doesn't match any of the cases.
  }

  return (
    <>
      <Navbar />
      {Component && <Component />}
    </>
  );
}
