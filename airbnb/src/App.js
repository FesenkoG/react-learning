import React from "react"
import Navbar from "./components/Navbar"
import ImageGrid from "./components/ImageGrid"
import Card from "./components/Card"
import data from "./data"
import './style.css'

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const cards = data.map(object => {
        return (
            <Card
                key={object.id}
                item={object}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {/* <ImageGrid /> */}
            <section className="cards-list">{cards}</section>
        </div>
    )
}