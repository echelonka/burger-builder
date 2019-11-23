import React, { useState } from 'react'
import Aux from '../../hoc/Aux'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export default function (props) {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const toggleMenu = () => setShowSideDrawer(!showSideDrawer)

  return (
    <Aux>
      <Toolbar onToggleMenu={toggleMenu} />
      <SideDrawer opened={showSideDrawer} onClose={toggleMenu} />
      <main className='layout'>
        {props.children}
      </main>
    </Aux>
  )
}
