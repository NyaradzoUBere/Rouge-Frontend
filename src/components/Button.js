import React from 'react'
// import Card from '../components/Card'

export default function Button(props) {

    const showLightProducts = () => {
        {this.showProducts()}
        // <Card image= {props.product.image_link} name = {props.product.name} description = {props.product.description} showPrice = {this.showPrice} price = {props.product.price}/>
    }

    const showProducts = () => {
        return <Card image= {props.product.image_link} name = {props.product.name} description = {props.product.description} showPrice = {props.product.showPrice} price = {props.product.price}/>
    }

    return(
        <li className = "button-list">
            <button className = "day" onClick = {showLightProducts}>Daytime</button>
            {/* <button className = "night" onClick = {props.showDarkColors}>NightTime</button> */}
            <h1>{props.hsp}</h1>
        </li>
    )
}