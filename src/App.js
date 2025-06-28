import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Homepage />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
