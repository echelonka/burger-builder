import React from 'react'
import './BuildControls.css'

import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControls = props => (
    <div className='build-controls'>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]}
            />
        ))}
        <button
          onClick={props.ordered}
          className="build-controls__order-button"
          disabled={!props.purchasable}
        >
            ORDER NOW
        </button>
    </div>
)

export default buildControls
