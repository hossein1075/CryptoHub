import React from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import NavBarCryptoPrice from './NavBarCryptoPrice'
function NavBar() {
  return (
    <header>
      <NavBarCryptoPrice />
      <NavDesktop />
      <NavMobile />
    </header>
  )
}

export default NavBar