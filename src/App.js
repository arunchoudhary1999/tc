import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Details from "./pages/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/details" element={<Details />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
