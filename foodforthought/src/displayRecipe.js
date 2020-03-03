import React from "react";

export default function displayRecipe({  }) {
  const style = {
    backgroundColor: "#ffccff",
    padding: 10
  };

//   if (!film) {
//     return <div style={style}>Select a recipe</div>;
//   }
  return (
    <div style={style}>
        <h4> Your Recipes </h4> 
        <h1>Recipe Name</h1>
        <h2>Minutes for Preparation: </h2>
        <h3>Servings: </h3>


      {/* <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <div>
        <b>"Image": Baked-Cheese-Manicotti-633508.jpg</b>: {}
      </div>
      <div>
        <b>"Ready In Minutes": 45</b>: {}
      </div>
      <div>
        <b>"Servings": 6</b>: {}
      </div>
      <div>
        <b>"Title": "Baked Cheese Manicotti"</b>: {}
      </div> */}
    </div>
  );
}

/*
 "image": "Baked-Cheese-Manicotti-633508.jpg",
            "imageUrls": [
                "Baked-Cheese-Manicotti-633508.jpg"
            ],
            "readyInMinutes": 45,
            "servings": 6,
            "title": "Baked Cheese Manicotti"
*/