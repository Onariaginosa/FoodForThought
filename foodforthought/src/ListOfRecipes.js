import React from 'react';
import NewRecipe from './NewRecipe';

const ListOfRecipes = params => (
    <div className = "listRecipes">
        {params.results.map(recipe => <NewRecipe recipe={recipe} key={recipe.id} id={recipe.id}/>)}
    </div>
)

export default ListOfRecipes