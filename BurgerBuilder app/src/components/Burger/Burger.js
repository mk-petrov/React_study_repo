import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.css'

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients) // this will return an array of object keys
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
    // flatten the array and it will be always empty or with values
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger
