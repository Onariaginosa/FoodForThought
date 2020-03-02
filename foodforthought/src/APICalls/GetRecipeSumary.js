import React, { useState, useEffect } from "react";
// import Ingredients, Intolerance, dietary restriction from food form.js

export default function GetRecipeSummary({  }) {
    const [recipesList, setRecipesList] = useState([]);
    const unirest = require('unirest');
    const API_KEY = "7a295a42c6754bc79039240148619a7e";
    let RECIPE_ID = 716429;
    let requestString = "https://api.spoonacular.com/recipes/";
    //uses 1 point
    requestString = requestString + RECIPE_ID+ "/summary";
    let x = unirest.get(requestString)
        .header("X-RapidAPI-Key", API_KEY)
        .end(function(result) {
            if (result.status === 200) {
                const resultList = result.body.map(result =>
                    console.log(result))
            }

        })
}