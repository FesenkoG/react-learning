import React from "react";
import star from "../images/star.png"

export default function Card(props) {
    let item = props.item
    let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star"></img>
                <span className="grey">{item.stats.rating}</span>
                <span className="grey">({item.stats.reviewCount}) * </span>
                <span className="grey">{item.location}</span>
            </div>
            <p>{item.title}</p>
            <p><span className="bold">From ${item.price}</span> / person</p>
        </div>
    )
}