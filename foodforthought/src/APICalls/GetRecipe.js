
// export default function GetRecipe() {
const getRecipe = async (props) => {
    const API_KEY = "3e9268cb3212476ab288e2cdc1fcba3d";
    let RECIPE_ID = props;
    let requestString = "https://api.spoonacular.com/recipes/";
    // uses 1 and 0.01 points if nutrution is included
    requestString = requestString + RECIPE_ID+ "/information?apiKey=" + API_KEY + "&includeNutrition=false";






    
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
    // console.log("TEST: " + test)
    // return test

    // return ( {recipe});
}

export {
    getRecipe
}