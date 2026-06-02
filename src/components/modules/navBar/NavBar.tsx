import React from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

function NavBar() {
  return (
    <header>
        <NavDesktop/>
        <NavMobile/>
    </header>
  )
}

export default NavBar