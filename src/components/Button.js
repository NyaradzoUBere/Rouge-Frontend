import React from 'react'

export default function Button(props) {

    const showLightColors = () => {

    }
    return(
        <li className = "button-list">
            {/* <button className = "day">Daytime</button> */}
            {/* <button className = "night">NightTime</button> */}
            <h1>{props.hsp}</h1>
        </li>
    )
}