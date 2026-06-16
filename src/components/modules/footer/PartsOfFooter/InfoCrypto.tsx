import React from 'react'

function InfoCrypto() {
    return (
        <div className='flex flex-col items-center md:items-start text-center md:text-right group'>
            <div className='flex items-center gap-2 mb-1 text-gray-500'>
                <svg className="w-5 h-5 text-[#4270FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                    </path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className='text-sm font-medium'>آدرس دفتر مرکزی</span>
            </div>
            <p className='text-sm text-gray-700 font-bold group-hover:text-blue-600 transition-colors duration-500 ease-out'>مشهد، بلوار هفتم تیر، مجتمع تجاری آرمیتاژ</p>
        </div>
    )
}

export default InfoCrypto