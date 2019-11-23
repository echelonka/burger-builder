import React from 'react'
import './Button.css'

const button = props => (
  <button className={['button', props.buttonType].join(' ')} onClick={props.clicked}>{props.children}</button>
)

export default button
