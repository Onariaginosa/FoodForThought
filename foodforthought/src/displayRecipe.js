import React from "react";

export default function displayRecipe({ recipe }) {
  const style = {
    backgroundColor: "#ffccff",
    padding: 10
  };

  // if (!recipe) {
  //   return <div style ={style}> Choose a recipe </div>;
  // }

  return (
    <div style={style}>
        <h1>Recipe Name: {recipe.title} </h1>
        <div>
         <b> Minutes for Preparation</b>: {recipe.minutes}
        </div>
        <div>
         <b> Servings</b>: {recipe.servings}
      </div>
    </div>
  );
}

