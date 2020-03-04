import React, { useState, useEffect } from "react";
// import Ingredients, Intolerance, dietary restriction from food form.js

export default function GetRecipe({  }) {
    const [recipe, setRecipe] = useState([]);
    const API_KEY = "3e9268cb3212476ab288e2cdc1fcba3d";
    let RECIPE_ID = 716429;
    let requestString = "https://api.spoonacular.com/recipes/";
    // uses 1 and 0.01 points if nutrution is included
    requestString = requestString + RECIPE_ID+ "/information?apiKey=" + API_KEY + "includeNutrition=false";

    fetch(requestString)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('There was a problem. Status Code: ' +
                        response.status);
                    return "There was an error";
                }
                response.json().then(function(data) {
                    console.log(data);
                    setRecipe(data.results)
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });


    return ( {recipe});
}