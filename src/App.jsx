import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Notfound from "./pages/404";
import Arsenal from "./pages/Arsenal/arsenal";
import Contact from "./pages/Contact/contact";
import About from "./pages/Experience/about";
import Homepage from "./pages/Homepage/homepage";
import Studies from "./pages/Studies/studies";
import ReadArticle from "./pages/readArticle";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/studies" element={<Studies />} />
            <Route path="/about" element={<About />} />
            <Route path="/arsenal" element={<Arsenal />} />
            {/* <Route path="/achievements" element={<Articles />} /> */}
            <Route path="/article/:slug" element={<ReadArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
