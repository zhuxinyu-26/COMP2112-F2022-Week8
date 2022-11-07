import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// common components
import Header from "./Views/components/header";
import Footer from "./Views/components/footer";

// content components
import Home from "./Views/content/home";
import About from "./Views/content/about";
import Projects from "./Views/content/projects";
import Services from "./Views/content/services";
import Contact from "./Views/content/contact";
// Styles and fonts
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

// JS Libraries
import "jquery/dist/jquery.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/home" element={<Home />}></Route>

  <Route path="/" element={<About />}></Route>
  <Route path="/about" element={<About />}></Route>

  <Route path="/" element={<Projects />}></Route>
  <Route path="/projects" element={<Projects />}></Route>

  <Route path="/" element={<Services />}></Route>
  <Route path="/services" element={<Services />}></Route>

  <Route path="/" element={<Contact />}></Route>
  <Route path="/contact" element={<Contact />}></Route>
  
</Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
