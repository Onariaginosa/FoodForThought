import React, {useState} from 'react';
// import NewRecipe from './NewRecipe';

const ListOfRecipes = (params) => (

    <div className = "listRecipes" style={{ backgroundColor: "lightgreen" }}>
        <ul>
        {params.results.map(recipe => (
            //     <li key={recipe.id} onClick={e => setter(recipe)}>
            //       {recipe.title}
            //     </li>
            //   ))}
          
        <li key={recipe.id}>
            {recipe.title}
        </li> ))}
        </ul>
    </div>
)
{/* <NewRecipe recipe={recipe} key={recipe.id} id={recipe.id}/> */}
export default ListOfRecipes