import React from 'react'
import './Card.css'

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.personaje.id}?set=set2&size=180x180`} alt="Robohash" />
            <h2>{props.personaje.name}</h2>
            <p>{props.personaje.email}</p>
        </div>
    )
}
