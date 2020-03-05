
import React, {useState, useEffect} from "react";
import {getRecipeList} from "../APICalls/GetRecipeList";
import {getSummary} from "../APICalls/GetRecipeSummary";
import {getRecipe} from "../APICalls/GetRecipe";


export default class RecipeList extends React.Component {
    constructor() {
        super();
        this.state = {data: [],
        };
    }

    async componentDidMount() {

        try {
            const response = await getRecipeList();
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                this.state.data = response.results;
            }

        } catch (error) {
            console.log(error);
        }
    }


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
    render() {
        return (
            < div >
            <h1>Recipe List </h1>
            "<ul> {this.state.data.map(recipe => (
                <li id = recipe.id>
                    {recipe.title}

                 </li>
                ))}
             </ul>

        < /div>
    )
        ;
    }
}