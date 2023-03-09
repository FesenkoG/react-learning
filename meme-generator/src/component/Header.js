import React from "react";
import logo from "../images/troll-face.png"
import "../style.css"

export default function Header() {
    return (
        <header>
            <img src={logo} className="header--image"/>
            <h1 className="header--title">MemeGenerator</h1>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}