import React from 'react'
import './Toolbar.css'
import burgerLogo from '../../../assets/img/burger-logo.png'
import NavigationItems from '../NavigationItems/NavigationItems'

export default props => (
  <header className='toolbar'>
    <div onClick={props.onToggleMenu} className='toggle'>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className='logo' style={{height: '80%'}}><img src={burgerLogo} alt="Burger Builder"/></div>
    <nav className='desktop-only'>
      <NavigationItems/>
    </nav>
  </header>
)
