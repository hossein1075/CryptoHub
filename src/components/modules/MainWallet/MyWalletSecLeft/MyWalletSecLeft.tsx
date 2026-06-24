import React from 'react'
import MyWalletSecLeftBox from '../MyWalletSecLeftBox/MyWalletSecLeftBox'

function MyWalletSecLeft() {
  return (
    <div className='backdrop-blur-xl border border-indigo-50 bg-white/90 p-6 rounded-34px shadow-[0_24px_60px_rgba(15,23,42,0.06)]'>
        <h3 className='text-lg text-gray-900 mb-5 font-black'>خلاصه سریع</h3>
        <div className='space-y-4'>
            {/* # */}
            <MyWalletSecLeftBox/>
            <MyWalletSecLeftBox/>
            <MyWalletSecLeftBox/>
        </div>
    </div>
  )
}

export default MyWalletSecLeft