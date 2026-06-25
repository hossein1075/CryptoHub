import React from 'react'

function Assest() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <div className='rounded-34px border border-indigo-50 bg-white/90 shadow-[0_24px_70px_rgba(15,23,42,0.07)] overflow-hidden backdrop-blur-xl'>
                    <div className='p-5 md:p-6 border border-indigo-50 flex flex-col md:flex-row md:items-center md:justify-between gap-3'>
                        <div>
                            <h3 className='text-gray-900 text-lg md:text-xl font-black'>دارایی‌های من</h3>
                            <p className='font-medium mt-1 text-13px text-gray-500'>مشاهده موجودی رمزارزها، ارزش فعلی و تغییرات هر دارایی</p>
                        </div>
                        <div className='w-full md:w-auto'>
                            <input type="text" placeholder="جستجو در دارایی‌ها..." className='w-full md:w-70 h-12 rounded-2xl border border-gray-200 bg-slate-50 px-4 text-sm! outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10'/>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default Assest