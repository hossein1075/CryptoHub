import React from 'react'

function MyWalletSecRight() {
    return (
        <div className='xl:col-span-2 rounded-34px p-6 md:p-8 bg-linear-to-br from-blue-50 to-blue-600 text-white shadow-[0_24px_60px_rgba(66,112,250,0.25)] relative overflow-hidden'>
            <div className='absolute -top-16 -left-14 size-48 blur-2xl rounded-full bg-white/10'></div>
            <div className='absolute -bottom-15 right-[10%] size-56 blur-2xl rounded-full bg-white/10'></div>
            <div className='relative'>
                <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-5'>
                    <div>
                        <span className='inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-5 font-black text-xs'>
                            کیف پول اصلی
                        </span>
                        <h2 className='text-28px md:text-38px font-black mb-2 leading-[1.8]'>
                            4000000
                        </h2>
                        <p className='text-sm md:text-15px text-white/85 leading-8 font-medium'>مجموع ارزش دارایی‌های رمزارزی شما بر اساس قیمت تقریبی بازار</p>

                    </div>
                    <div className='flexCenter self-start h-12 px-5 rounded-2xl bg-white/10 border border-white/15 text-white text-13px font-black hover:bg-white/15 transition duration-300 ease-in-out'>15000000</div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default MyWalletSecRight