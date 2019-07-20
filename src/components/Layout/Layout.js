import React from 'react'
import Aux from '../../hoc/Aux'
import './Layout.css'

const layout = props => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className='layout'>
            {props.children}
        </main>
    </Aux>
)

export default layout
