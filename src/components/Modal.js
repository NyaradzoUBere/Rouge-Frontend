import React from 'react'

export default function Modal(props) {
  return (
    <div className="modal" onClick={props.handleClick}>
      <div className="full-details">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.product.description}</p>
        {/* <p>{game.description_preview}</p>
        <p>Players: {game.min_players}-{game.max_players}</p>
        <p>Ages {game.min_age} and up.</p>
        <p>${game.price}</p>
        <p>This game takes between {game.min_playtime} and {game.max_playtime} minutes to play.</p> */}
      </div>
    </div>
  )
}