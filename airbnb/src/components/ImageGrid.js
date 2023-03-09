import React from "react";
import logo from "../images/photo-grid.png"

export default function ImageGrid() {
    return (
        <section className="hero">
            <img src={logo} className="photo--grid"/>
            <h1 className="photo--header">Online experiences</h1>
            <p className="photo--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </section>
    )
}