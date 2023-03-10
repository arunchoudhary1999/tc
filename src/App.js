// import "./App.css";
// import Home from "./pages/Home";
// import Signup from "./pages/Signup";
// import Signin from "./pages/Signin";
// import Details from "./pages/Details";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Profile from "./pages/Profile";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Home />}></Route>
//           <Route exact path="/details" element={<Details />}></Route>
//           <Route exact path="/profile" element={<Profile />}></Route>
//           <Route exact path="/signup" element={<Signup />}></Route>
//           <Route exact path="/signin" element={<Signin />}></Route>
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Details from "./pages/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile";
import { createContext, useReducer } from "react";
import Logout from "./pages/Logout";

import { initialState, reducer } from "./reducer/UseReducer";

// 1. We need ContextAPI
export const UserContext = createContext();

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/details" element={<Details />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/signin" element={<Signin />}></Route>
        <Route exact path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
      <Routing />
      </UserContext.Provider>
    </>
  );
}

export default App;

