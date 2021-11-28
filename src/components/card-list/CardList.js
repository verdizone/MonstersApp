import React from 'react'
import './CardList.css'
import {Card} from '../card/Card'

export const CardList = (props) => {
    return (
        <div className="card-list">
        {
            props.personajeOne.map(
              personaje=> 
              <Card key={personaje.id} personaje={personaje} />
            )
          }
        </div>
    )
}
