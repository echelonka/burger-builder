import React from 'react'
import PropTypes from 'prop-types'

import './SideDrawer.css'
import burgerLogo from '../../../assets/img/burger-logo.png'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const sideDrawer = props => {
  const attachedClasses = props.opened ? ['side-drawer', 'side-drawer--opened'] : ['side-drawer']

  return (
    <Aux>
      <Backdrop show={props.opened} clicked={props.onClose} />
      <div className={attachedClasses.join(' ')}>
        <div className='logo' style={{height: '11%'}}><img src={burgerLogo} alt="Burger Builder"/></div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

sideDrawer.propTypes = {
  opened: PropTypes.bool,
  onClose: PropTypes.func
}

export default sideDrawer
