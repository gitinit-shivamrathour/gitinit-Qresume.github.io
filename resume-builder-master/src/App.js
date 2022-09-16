import React from "react";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Support from "./components/Support";
import About from "./components/About";
import Contact from "./components/Contact";
import Thanksct from "./components/Thanksct";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Header />}></Route>
          <Route exact path="/body" element={<Body />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/support" element={<Support />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/thanksct" element={<Thanksct />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
