import React from 'react'
import './NavigationItems.css'

const links = [
  {link: '/', name: 'Burger Builder', active: true},
  {link: '/', name: 'Checkout'}
]

export default () => (
  <ul className='navigation-items'>
    {links.map(link => (
      <li className='navigation-items__item' key={link.name}>
        <a href={link.link} className={link.active ? 'active' : null}>{link.name}</a>
      </li>
    ))}
  </ul>
)
