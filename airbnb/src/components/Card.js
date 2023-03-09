import React from "react";
import star from "../images/star.png"

export default function Card(props) {
    const {img, rating, reviewCount, country, title, price, openSpots} = props

    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (country === "Online") {
        badgeText = "ONLINE"
    }
    
    let shouldShowBadge = openSpots === 0 || country === "Online"
    return (
        <div className="card">
            {shouldShowBadge && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star"></img>
                <span className="grey">{rating}</span>
                <span className="grey">({reviewCount}) * </span>
                <span className="grey">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}