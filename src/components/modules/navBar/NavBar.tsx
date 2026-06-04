import React from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import NavBarCryptoPrice from './NavBarCryptoPrice'
import LogicSidebar from './LogicSidebar'
function NavBar() {
  return (
    <header>
      <NavBarCryptoPrice />
      <NavDesktop />
      <LogicSidebar/>
    </header>
  )
}

export default NavBar