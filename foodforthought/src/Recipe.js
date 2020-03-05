
import React, {useState, useEffect} from "react";
import {getRecipe} from "./APICalls/GetRecipe"

export default function Recipe(props) {
    const style = {
        backgroundColor: "#ffccff",
        padding: 10
    };

    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        console.log("USE EFFECT CALLED")
        const getData = async () => {
            const data = await getRecipe()
            console.log("DATA:")
            console.log(data)
            setRecipe(data)
        }
        getData()
    }, [])


    // if (typeof(recipe) !== "string") {
    //   return (
    //   <div>
    //     <h1> Sorry! Recipe does not exist. Please try again later </h1>
    //   </div>
    //   )
    // }


    // if (!recipe) {
    //   return <div style ={style}> Choose a recipe </div>;
    // }

    return (
        <div style={style}>
        <h1>Recipe Name: {recipe.title} </h1>
    <div>
    <b> Minutes for Preparation</b>: {recipe.readyInMinutes}
                    </div>
                    <div>
                    <b> Servings</b>: {recipe.servings}
                    </div>
                    </div>
    );
}