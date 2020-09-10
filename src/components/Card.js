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

    render() {
        return(
            <>
                <li className = "product-card" onClick = {this.handleClick}>
                    <img className = "product-image" src = {this.props.image} />
                    <h2>{this.props.name}</h2>
                </li>
                {this.state.modal ? <Modal product={this.props} handleClick={this.handleClick} image = {this.props.image} name = {this.props.name} showPrice = {this.props.showPrice} brand = {this.props.brand}/> : null}
            </>
        )
    }

}