import React from "react";
import Home from "./Components/Home/Home";
import Reviews from "./Components/Reviews/Reviews";
import Dashboard from "./Components/Dashboard/Dashboard";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
