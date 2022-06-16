import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home";
import OompaLoompaDetail from "./Components/pages/OompaLoompaDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oompa-loompa/:_id" element={<OompaLoompaDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
