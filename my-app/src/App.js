import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
