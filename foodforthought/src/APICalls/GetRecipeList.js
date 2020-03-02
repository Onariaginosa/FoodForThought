import React, { useState, useEffect } from "react";
// import Ingredients, Intolerance, dietary restriction from food form.js

export default function GetRecipeList({  }) {
    const [recipesList, setRecipesList] = useState([]);
    const unirest = require('unirest');
    const API_KEY = "7a295a42c6754bc79039240148619a7e";
    let EXCLUDE_INGREDIENT_LIST = ['bananas', 'apples', 'cheese', 'crackers'];
    let INTOLERANCE_LIST = ['peanuts', 'gluten', 'treenuts', 'dairy' ];
    let DIETARY_RESTRICTION = 'vegan';
    let requestString = "https://api.spoonacular.com/recipes/search?number=10&instructionsRequired=true&excludeIngredients=";
    const excludeIngredientsString = EXCLUDE_INGREDIENT_LIST.map(ingredient =>
        ingredient + '%2C'
    );
    const intoleranceString = INTOLERANCE_LIST.map( intolerance =>
        intolerance+'%2C'
    );
    //uses 1 point and 0.01 points per recipe returned
    requestString = requestString + excludeIngredientsString+ "&diet="+DIETARY_RESTRICTION+ "&intolerances="+intoleranceString;
    let x = unirest.get(requestString)
        .header("X-RapidAPI-Key", API_KEY)
        .end(function(result) {
            if (result.status === 200) {
                const resultList = result.body.map(result =>
                console.log(result))
            }

        })
}


