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
  }
  return (
    <>
      <Navbar />
      {/* {Component} */}
      <Component />
    </>
  );
}
