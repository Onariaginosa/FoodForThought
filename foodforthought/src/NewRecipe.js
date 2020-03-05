import React from 'react'

const NewRecipe = props => {
  const { recipe } = props
  return (
    <div className="NewRecipe" key={recipe.id}>
      <img className='apod'src={recipe.image} alt={recipe.title} />
      <div className='descriptionDiv'>
        <h2 className='readTitle'>{recipe.title}</h2>
      </div>
    </div>
  )
}

export default NewRecipe