import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home";
import OompaLoompaDetail from "./Components/pages/OompaLoompaDetail";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oompa-loompa" element={<OompaLoompaDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
