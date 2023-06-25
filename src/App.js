import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Portfolio from "./components/Portfolio";

import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const AppLayout = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home key='/' />} errorElement={<Error/>} />
                <Route exact path="/about" element={<About key='/' />} errorElement={<Error/>}/>
                <Route exact path="/portfolio" element={<Portfolio key='/' />} errorElement={<Error/>}/>
                <Route exact path="/projects" element={<Projects key='/' />} errorElement={<Error/>}/>
                <Route exact path="/resume" element={<Resume key='/' />} errorElement={<Error/>}/>
                <Route exact path="/contact" element={<Contact key='/' />} errorElement={<Error/>}/>
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);