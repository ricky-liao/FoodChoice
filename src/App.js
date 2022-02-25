import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import MealList from "./MealList";

let API_KEY = "c86ef85a6a92401e9eef6a7de304901e";

function App() {
  const[mealData, setMealData] = useState(null);
  const[calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=` + API_KEY + `&timeFrame=day&targetCalories${calories}`
    )
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error!");
    });
  }

  return (
    <div className="App">
      <section className="controls">
        <input
        type="number"
        placeholder="Calories (e.g 2000)"
        onChange={handleChange} />
      </section>
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
