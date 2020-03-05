import React, { useState, useEffect } from "react";
// import Ingredients, Intolerance, dietary restriction from food form.js

const getSummary = async () => {
    const [summaryList, setSummaryList] = useState([]);
    const API_KEY = "c2e4ed57e02c47eab1daa965d0927fe1";
    let RECIPE_ID = 716429;
    let requestString = "https://api.spoonacular.com/recipes/";
    //uses 1 point
    requestString = requestString + RECIPE_ID+ "/summary?apiKey="+API_KEY;


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
    getSummary
}