import React from 'react'

function ValuesWebBox() {
    return (
        <div className='group rounded-30px bg-white border border-indigo-50 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transform hover:-translate-y-1 hover:border-indigo-100 transition ease-in duration-500 hover:shadow-[0_24px_60px_rgba(66,112,250,0.12)] '>
            <div className='size-14 rounded-full bg-blue-600/10 text-blue-600 mb-5 flexCenter group-hover:bg-blue-600 group-hover:text-white transition duration-300 ease-in-out'>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z"></path>
                    <path d="M9 12l2 2 4-5"></path>
                </svg>
            </div>
            <h3 className='text-17px font-black mb-3 text-gray-900'>امنیت</h3>
            <p className='text-13px leading-7 font-medium text-gray-500'>حفاظت از حساب و دارایی کاربران، مهم‌ترین اصل در طراحی محصول و فرآیندهای ماست.</p>
        </div>
    )
}

export default ValuesWebBox