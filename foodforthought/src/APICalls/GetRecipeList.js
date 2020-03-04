import React, { useState, useEffect } from "react";
// import Ingredients, Intolerance, dietary restriction from food form.js

export default function GetRecipeList() {
    let [recipeList, setRecipeList] = useState([])
    const API_KEY = "3e9268cb3212476ab288e2cdc1fcba3d";
    let EXCLUDE_INGREDIENT_LIST = ["bananas", "apples", "cheese", "crackers"];
    let INTOLERANCE_LIST = ["peanuts", "gluten", "tree nuts", "dairy"];
    let DIETARY_RESTRICTION = "vegan";
    let requestString =
        "https://api.spoonacular.com/recipes/search?apiKey=" + API_KEY + "&number=10&instructionsRequired=true&excludeIngredients=";
    const excludeIngredientsString = EXCLUDE_INGREDIENT_LIST.map(
        ingredient => ingredient + "%2C"
    );
    const intoleranceString = INTOLERANCE_LIST.map(
        intolerance => intolerance + "%2C"
    );
    requestString =
        requestString +
        excludeIngredientsString +
        "&diet=" +
        DIETARY_RESTRICTION +
        "&intolerances=" +
        intoleranceString;
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
                    setRecipeList(data.results)
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });


    return ( {recipeList});
}


