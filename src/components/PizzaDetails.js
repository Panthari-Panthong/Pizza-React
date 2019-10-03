import React from 'react'



export default function PizzaDetails(props) {
  return (
    <div>
      <h1>{props.pizza.name}</h1>

      <p>
        <i>{props.pizza.description}</i>
      </p>


      <ul>
        {props.pizza.ingredients.map(ingredient =>
          <li key={ingredient}>{ingredient}</li>
        )}
      </ul>
    </div>
  )
}