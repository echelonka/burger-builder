import React from 'react'
import './BuildControl.css'

const buildControl = props => (
    <div className='build-control'>
        <div className='build-control__label'>{props.label}</div>
        <button className='build-control__less' onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className='build-control__more' onClick={props.added}>More</button>
    </div>
)

export default buildControl
