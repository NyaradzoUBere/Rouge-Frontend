import React from 'react'

export default function Card(props) {
    return(
        <div className = "product-card">
            <img className = "product-image" src = {props.image} />
            <h2>{props.name}</h2>
        </div>
    )
}