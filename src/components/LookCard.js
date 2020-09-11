import React from 'react'
import Modal from '../components/Modal'

export default class LookCard extends React.Component {
    state = {
        modal: false
    }
    
    handleClick = () => {
        const newModal = !this.state.modal
        this.setState({ modal: newModal })
    }

    handleLooksClick = () => {
        this.props.clickLooks(this.props.product)
    }

    render() {
        return(
            <>
                <li className = "look-card">
                    <img className = "product-image" src = {this.props.product.image_link} onClick = {this.handleClick}/>
                    <h2>{this.props.product.name}</h2>
                    <button className = "look-button" onClick = {this.handleLooksClick}>Remove From Look</button>
                </li>
                {this.state.modal ? <Modal product={this.props.product} handleClick={this.handleClick} image = {this.props.image} name = {this.props.name} showPrice = {this.props.showPrice} brand = {this.props.brand}/> : null}
            </>
        )
    }

}