import React from 'react'

export default function Modal(props) {
    return (
        <div className="modal" onClick={props.handleClick}>
        <div className="product-details">
            <h2 className = "product-brand">{props.brand}</h2>
            <h2 className = "product-brand">{props.category}</h2>
            <img src={props.image} alt={props.name} id= "modal-image" />
            <h2 className = "product-name">{props.name}</h2>
            <p className = "product-description">{props.product.description}</p>
            <p className = "price">${props.product.price}</p>
        </div>
        </div>
    )
}