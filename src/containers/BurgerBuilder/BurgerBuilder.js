import React, { useEffect, useState } from 'react'
import withErrorHandler from '../../hoc/withErrorHandler'
import axios from '../../axios-orders'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

const BurgerBuilder = () => {
  const [isLoading, setLoading] = useState(false)
  const [ingredients, setIngredients] = useState({})
  const [totalPrice, setTotalPrice] = useState(4.6)
  const [purchasable, setPurchasable] = useState(true)
  const [purchasing, setPurchasing] = useState(false)
  const disabledInfo = {...ingredients}
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  useEffect(() => {
    axios.get('/ingredients.json').then(({ data }) => setIngredients(data))
  }, [])

  const updatePurchaseState = newIngredients => {
    setPurchasable(Object.values(newIngredients).reduce((sum, item) => sum + item, 0) > 0)
  }

  const addIngredient = type => {
    const newIngredients = {
      ...ingredients,
      [type]: ingredients[type] + 1
    }
    setIngredients(newIngredients)
    setTotalPrice(totalPrice + INGREDIENT_PRICES[type])
    updatePurchaseState(newIngredients)
  }

  const removeIngredient = type => {
    const newIngredients = {
      ...ingredients,
      [type]: ingredients[type] - 1
    }
    setIngredients(newIngredients)
    setTotalPrice(totalPrice - INGREDIENT_PRICES[type])
    updatePurchaseState(newIngredients)
  }

  const continuePurchase = async () => {
    setLoading(true)
    const order = {
      ingredients,
      totalPrice,
      customer: {
        name: 'Maryna',
        address: {
          street: 'Test street 12',
          zipCode: 12345,
          country: 'Ukraine'
        },
        email: 'test123@test.com'
      },
      deliveryMethod: 'fastest'
    }
    await axios.post('/orders.json', order)
    setLoading(false)
    setPurchasing(false)
  }

  const changePurchasing = purchasing => setPurchasing(purchasing)

  return (
    <Aux>
      <Modal show={purchasing} modalClosed={() => changePurchasing(false)}>
        {isLoading ? <Spinner/> : <OrderSummary
          onPurchaseCancelled={() => changePurchasing(false)}
          onPurchaseContinued={continuePurchase}
          totalPrice={totalPrice}
          ingredients={ingredients}
        />}
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        purchasable={purchasable}
        ingredientAdded={addIngredient}
        ingredientRemoved={removeIngredient}
        disabled={disabledInfo}
        price={totalPrice}
        ordered={() => changePurchasing(true)}
      />
    </Aux>
  )
}

export default withErrorHandler(BurgerBuilder, axios)
