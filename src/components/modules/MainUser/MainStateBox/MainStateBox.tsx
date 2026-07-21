import React from 'react'

function MainStateBox() {
  return (
    <div className='flex flex-col justify-center rounded-24px bg-white/10 border border-white/15 p-4 md:p-5 backdrop-blur'>
      <div className='flex items-center justify-between gap-3'>
        <span className='text-xs font-black text-white/70'>موجودی کل</span>
        <span className='size-9 rounded-xl bg-white/10 flexCenter'>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l4 6 3-6 3 6 4-6v18H5V3z"></path>
          </svg>
        </span>
      </div>
      <p className='mt-4 text-2xl md:text-3xl font-black text-emerald-100'>
        {/*  */}
      </p>
      <p className='mt-2 text-11px font-black'>
        کلیک برای نمایش / مخفی‌سازی
      </p>
    </div>
  )
}

export default MainStateBox