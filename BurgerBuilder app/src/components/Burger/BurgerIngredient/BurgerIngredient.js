import React from 'react'
import classes from './BurgerIngredient.css'

// use the curly braces because of the logic before the render method
const burgerIngredient = (props) => {
  let ingredient = null

  switch (props.type) {
    case ('bread-bottom'):
      ingredient = <div className={classes.BreadBottom}></div>
      break

    case ('bread-top'):
    // return multi-line JSX
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      )
      break

    case ('meet'):
      ingredient = <div className={classes.Meat}></div>
      break

    case ('cheese'):
      ingredient = <div className={classes.Cheese}></div>
      break

    case ('salad'):
      ingredient = <div className={classes.Salad}></div>
      break

    case ('bacon'):
      ingredient = <div className={classes.Bacon}></div>
      break

    default: ingredient = null
  }

  return ingredient
}

export default burgerIngredient
