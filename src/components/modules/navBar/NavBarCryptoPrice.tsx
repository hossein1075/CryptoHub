import React from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import NavBarCryptoPriceBox from './NavBarCryptoPriceBox/NavBarCryptoPriceBox';
function NavBarCryptoPrice() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 font-lahze bg-white h-14 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] z-40 flexCenter border-b-2 border-slate-100">
        <div className='flex items-center gap-8 px-4'>
          <NavBarCryptoPriceBox />
          <NavBarCryptoPriceBox />
          <NavBarCryptoPriceBox />
          <NavBarCryptoPriceBox />
        </div>
      </div>
    </>
  )
}

export default NavBarCryptoPrice