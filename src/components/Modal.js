import React from 'react'

export default function Modal(props) {
    return (
        <div className="modal" onClick={props.handleClick}>
        <div className="product-details">
            <img src={props.image} alt={props.name} id= "modal-image" />
            <h2 className = "product-name">{props.name}</h2>
            <p className = "product-description">{props.product.description}</p>
            <p className = "price">${props.product.price}</p>
            {/* <p>{game.description_preview}</p>
            <p>Players: {game.min_players}-{game.max_players}</p>
            <p>Ages {game.min_age} and up.</p>
            <p>${game.price}</p>
            <p>This game takes between {game.min_playtime} and {game.max_playtime} minutes to play.</p> */}
        </div>
        </div>
    )
}