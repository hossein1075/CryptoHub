import React from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
function NavBarCryptoPrice() {
  return (
    <>
          <div className="fixed top-0 left-0 right-0 font-lahze bg-white h-14 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] z-40 flexCenter border-b-2 border-slate-100">
    <div className='flex items-center gap-8 px-4'>
      {/* crypto */}
      <div className='flex items-center gap-2 px-3 rounded-lg hover:bg-cryptoPrice cursor-pointer transition-all duration-300 ease-linear'>
        <span className='size-1.5 rounded-full bg-cryptoPriceUp'></span>
        <span className='text-sm font-extrabold text-slate-700'>دلار پی پال</span>
        <span className='text-sm font-bold text-slate-500'>۵۹,۴۰۰ تومان</span>
        <span className='flex items-center gap-0.5 text-xs font-bold text-cryptoPriceUp'>
          <FaChevronUp size={12}/>
          +۱.۲٪
        </span>
      </div>
      <div className='flex items-center gap-2 px-3 rounded-lg hover:bg-cryptoPrice cursor-pointer transition-all duration-300 ease-linear'>
        <span className='size-1.5 rounded-full bg-cryptoPriceUp'></span>
        <span className='text-sm font-extrabold text-slate-700'>دلار پی پال</span>
        <span className='text-sm font-bold text-slate-500'>۵۹,۴۰۰ تومان</span>
        <span className='flex items-center gap-0.5 text-xs font-bold text-cryptoPriceUp'>
          <FaChevronUp size={12}/>
          +۱.۲٪
        </span>
      </div>
      <div className='flex items-center gap-2 px-3 rounded-lg hover:bg-cryptoPrice cursor-pointer transition-all duration-300 ease-linear'>
        <span className='size-1.5 rounded-full bg-red-400'></span>
        <span className='text-sm font-extrabold text-slate-700'>دلار پی پال</span>
        <span className='text-sm font-bold text-slate-500'>۵۹,۴۰۰ تومان</span>
        <span className='flex items-center gap-0.5 text-xs font-bold text-red-400'>
          <FaChevronDown size={12}/>
          +۱.۲٪
        </span>
      </div>
      <div className='flex items-center gap-2 px-3 rounded-lg hover:bg-cryptoPrice cursor-pointer transition-all duration-300 ease-linear'>
        <span className='size-1.5 rounded-full bg-red-400'></span>
        <span className='text-sm font-extrabold text-slate-700'>دلار پی پال</span>
        <span className='text-sm font-bold text-slate-500'>۵۹,۴۰۰ تومان</span>
        <span className='flex items-center gap-0.5 text-xs font-bold text-red-400'>
          <FaChevronDown size={12}/>
          +۱.۲٪
        </span>
      </div>
      <div className='flex items-center gap-2 px-3 rounded-lg hover:bg-cryptoPrice cursor-pointer transition-all duration-300 ease-linear'>
        <span className='size-1.5 rounded-full bg-red-400'></span>
        <span className='text-sm font-extrabold text-slate-700'>دلار پی پال</span>
        <span className='text-sm font-bold text-slate-500'>۵۹,۴۰۰ تومان</span>
        <span className='flex items-center gap-0.5 text-xs font-bold text-red-400'>
          <FaChevronDown size={12}/>
          +۱.۲٪
        </span>
      </div>
    </div>
  </div>
    </>
  )
}

export default NavBarCryptoPrice