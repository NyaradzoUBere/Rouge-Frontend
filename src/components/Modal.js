import React from 'react'

export default function Modal(props) {
    return (
        <div className="modal" onClick={props.handleClick}>
        <div className="product-details">
            <img src={props.image} alt={props.name} id= "modal-image" />
            <h2 className = "product-name">{props.name}</h2>
            <p className = "product-description">{props.product.description}</p>
            <p className = "price">${props.product.price}</p>
            {/* {props.product.showPrice} */}
        </div>
        </div>
    )
}