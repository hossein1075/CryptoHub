import React from 'react'
import TitleSec from '../../TitleSec/TitleSec'

function TimeLineWebBox() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
            <div className='rounded-30px bg-white border border-indigo-50 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transform hover:-translate-y-1 hover:border-indigo-100 transition ease-in duration-500 hover:shadow-[0_24px_60px_rgba(66,112,250,0.12)] '>
                <TitleSec />
                <h3 className='text-lg font-black mb-3 text-gray-900'>شکل‌گیری ایده اولیه</h3>
                <p className='text-13px leading-7 font-medium text-gray-500'>شروع با هدف ساده‌سازی دسترسی کاربران به خدمات پایه ارز دیجیتال و ساخت تجربه‌ای امن‌تر.</p>
            </div>
            <div className='hidden md:flex justify-center md:order-2'>
                <span className="relative z-10 w-14 h-14 rounded-3xl bg-[#4270FA] text-white flex items-center justify-center shadow-[0_14px_28px_rgba(66,112,250,0.28)]">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default TimeLineWebBox