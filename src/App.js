import Home from "./components/home/Home.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;