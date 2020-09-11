import React from 'react'
import Modal from '../components/Modal'

export default class Card extends React.Component {
    state = {
        modal: false
    }
    
    handleClick = (event) => {
        const newModal = !this.state.modal
        this.setState({ modal: newModal })
    }

    handleLooksClick = () => {
        this.props.addToLooks(this.props.product)
        // console.log(this.props.product)
    }

    render() {
        return(
            <>
                <li className = "product-card">
                    <img className = "product-image" src = {this.props.product.image_link} onClick = {this.handleClick}/>
                    <h2>{this.props.product.name}</h2>
                    <button onClick = {this.handleLooksClick}>Add To Look</button>
                </li>
                {this.state.modal ? <Modal product={this.props} handleClick={this.handleClick} image = {this.props.image} name = {this.props.name} showPrice = {this.props.showPrice} brand = {this.props.brand}/> : null}
            </>
        )
    }

}