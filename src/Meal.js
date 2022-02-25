import React, {useState, useEffect} from 'react'

export default function Meal({meal}) {
  const [imageURL, setImageURL] = useState("");
  let API_KEY = "c86ef85a6a92401e9eef6a7de304901e";

  useEffect(() => {
    fetch(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=` + API_KEY + `&includeNutrition=false`
    )
    .then((response) => response.json())
    .then((data) => {
        setImageURL(data.image)
    })
    .catch(() => {
        console.log("Error!");
    });
  }, [meal.id])
  
    return (
    <article>
        <h1>{meal.title}</h1>
        <img src={imageURL} alt="recipe" />
        <ul className="instructions">
            <li>Preparation time: {meal.readyInMinutes} minutes</li>
            <li>Number of servings: {meal.servings}</li>
        </ul>

        <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  )
}
