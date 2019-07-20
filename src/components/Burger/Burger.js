import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(key => (
            [...Array(props.ingredients[key])].map((_, i) => <BurgerIngredient key={key + i} type={key}/>)
            )
        )
        .reduce((arr, element) => arr.concat(element), [])

    if (!transformedIngredients.length) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className='burger'>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger
