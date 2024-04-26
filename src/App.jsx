import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Movies from "./components/pages/movies/Movies";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/movie" element={<Movies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
