import React from 'react'
import { FaChevronUp } from 'react-icons/fa'

function NavBarCryptoPriceBox() {
    return (
        <>
            {/* crypto */}
            <div className='flex items-center gap-2 px-3 rounded-lg hover:bg-cryptoPrice cursor-pointer transition-all duration-300 ease-linear'>
                <span className='size-1.5 rounded-full bg-cryptoPriceUp'></span>
                <span className='text-sm font-extrabold text-slate-700 whitespace-nowrap'>دلار پی پال</span>
                <span className='text-sm font-bold text-slate-500 whitespace-nowrap'>۵۹,۴۰۰ تومان</span>
                <span className='flex items-center gap-0.5 text-xs font-bold text-cryptoPriceUp'>
                    <FaChevronUp size={12} />
                    +۱.۲٪
                </span>
            </div>
        </>
    )
}

export default NavBarCryptoPriceBox

// downsize / loss

{/* <div className='flex items-center gap-2 px-3 rounded-lg hover:bg-cryptoPrice cursor-pointer transition-all duration-300 ease-linear'>
        <span className='size-1.5 rounded-full bg-red-400'></span>
        <span className='text-sm font-extrabold text-slate-700 whitespace-nowrap'>دلار پی پال</span>
        <span className='text-sm font-bold text-slate-500 whitespace-nowrap'>۵۹,۴۰۰ تومان</span>
        <span className='flex items-center gap-0.5 text-xs font-bold text-red-400'>
          <FaChevronDown size={12}/>
          +۱.۲٪
        </span>
      </div> */}