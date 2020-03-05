import React, { useState, useEffect } from "react";
// import Ingredients, Intolerance, dietary restriction from food form.js









const getRecipeList = async () => {
    const API_KEY = "c2e4ed57e02c47eab1daa965d0927fe1";
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


    const response = await fetch(requestString)
    console.log("RESPONSE RECEIVED")
    if (response.status !== 200) {
        console.log('There was a problem. Status Code: ' + response.status);
    }
    const json = await response.json()

    console.log("JSON")
    console.log(json);
    // setRecipe(data.results)
    console.log(typeof json)
    return json
}



export {
    getRecipeList
}