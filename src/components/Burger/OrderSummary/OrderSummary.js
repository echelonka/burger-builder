import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

export default props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(key => (<li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}</li>))

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button buttonType='danger' clicked={props.onPurchaseCancelled}>CANCEL</Button>
      <Button buttonType='success' clicked={props.onPurchaseContinued}>CONTINUE</Button>
    </Aux>
  )
}
