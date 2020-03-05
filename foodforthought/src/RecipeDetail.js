import React, {useEffect, useState} from 'react'
import {getRecipe} from "./APICalls/GetRecipe"

export default function RecipeDetail({ props }) {
    // console.log(props);

    const style = {
      backgroundColor: "#ffccff",
      padding: 10
    };
    
    if (!props) {
      return <div style={style}>Select a recipe</div>;
    }
    // const { id } = props;
    // console.log("ID = ", id.recipe);
    // const [recipe, setRecipe] = useState();

    // useEffect(() => {
    //   console.log("USE EFFECT CALLED")
    //   const getData = async () => {
    //     const data = await getRecipe(id.recipe);
    //     console.log("DATA:")
    //     console.log(data)
    //     setRecipe(data)
    //   }
    //   getData()
    // }, [])
  
    
    return (
      <div style={style}>
        {props.recipe}
        {/* <h1>Recipe Name: {recipe.title} </h1>
        <div>
         <b> Minutes for Preparation</b>: {recipe.readyInMinutes}
        </div>
        <div>
         <b> Servings</b>: {recipe.servings}
      </div> */}
    </div>
    );
  }