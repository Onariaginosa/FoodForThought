import React, { useState, useEffect } from "react";
import GetRecipeSummary from "./GetRecipeSummary";
import GetRecipeList from "./GetRecipeList";

class RecipeList extends React.Component {

    render(){
    return (
        <div>
            <ul>
                {recipes && recipes.map(recipe => (
                        <li key={film.id} onClick={e => setter(recipe)}>
                            {recipe.title}
                            GetRecipeSummary(recipe.id)
</li>
))}
</ul>
    </div>
);
}}

export default RecipeList;