import React, { Component} from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
}from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Hello from "./Hello";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/stuff">Stuff</NavLink></li>
                    <li><NavLink href="/contact">Contact</NavLink></li>
                    <li><NavLink href="/hello">Hello</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/stuff" element={<Stuff/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/hello" element={<Hello/>}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}
export default Main;