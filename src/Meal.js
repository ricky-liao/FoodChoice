import React, {useState, useEffect} from 'react'

export default function Meal({meal}) {
  const [imageURL, setImageURL] = useState("");
  
    return (
    <article>
        <h1>{meal.title}</h1>
        <img src={imageURL} alt="recipe" />
        <ul>
            <li>Preparation time: {meal.readyInMinutes} minutes</li>
            <li>Number of servings: {meal.servings}</li>
        </ul>

        <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  )
}
