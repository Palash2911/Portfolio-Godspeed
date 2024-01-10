import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Notfound from "./pages/404";
import About from "./pages/about";
import Articles from "./pages/articles";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import Projects from "./pages/projects";
import ReadArticle from "./pages/readArticle";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Articles />} />
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
