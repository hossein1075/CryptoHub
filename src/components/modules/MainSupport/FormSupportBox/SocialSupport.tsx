import React from 'react'
import SocialSupportBox from '../SocialSupportBox/SocialSupportBox'

function SocialSupport() {
  return (
    <div className='rounded-32px bg-linear-to-br from-blue-500 to-blue-600 p-6 text-white shadow-[0_24px_60px_rgba(66,112,250,0.25)] overflow-hidden relative'>
      <div className='absolute bg-white/10 rounded-full size-40 -top-16 -left-16'></div>
      <div className='absolute bg-white/10 rounded-full size-52 -bottom-20 -right-20'></div>
      <div className='relative'>
        <h3 className='mb-3 font-black text-lg'>ما را دنبال کنید</h3>
        <p className='text-13px leading-7 font-medium mb-5'>برای اطلاع از جدیدترین اخبار و آموزش‌ها، در شبکه‌های اجتماعی همراه ما باشید.</p>
        <div className='flex items-center gap-2'>
          <SocialSupportBox/>
          <SocialSupportBox/>
          <SocialSupportBox/>
        </div>
      </div>
    </div>
  )
}

export default SocialSupport