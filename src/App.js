import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Achievements from "./pages/Achievements/Achievements";
import Contact from "./pages/Contact/Contact";
import Creations from "./pages/Creation/Creation";
import Experience from "./pages/Experience/Experience";
import Homepage from "./pages/Homepage/Homepage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Experience />} />
            <Route path="/projects" element={<Creations />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
