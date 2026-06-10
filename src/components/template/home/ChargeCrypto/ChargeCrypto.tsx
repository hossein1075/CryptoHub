import ChargeCryptoBox from '@/components/modules/ChargeCryptoBox/ChargeCryptoBox'
import { Button } from '@mantine/core'
import React from 'react'

function ChargeCrypto() {
    return (
        <section className='mt-15 mb-80 font-lahze'>
            <div className="container">
                <div className='text-center mb-16'>
                <h2 className='mb-2 text-28px md:text-xl lg:text-3xl font-black '>شارژ و نقد حساب های ارزی</h2>
                <p className='font-medium text-sm'>شارژ و نقد حساب شما با نرخ رقابتی؛ کمتر از ۲ ساعت</p>
                </div>

                <div className='relative flexCenter flex-col lg:flex-row gap-10 lg:gap-8'>
                    {/* هاله نور پشت سکشن */}
                    <div className='hidden  absolute inset-0 z-0 size-150 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[radial-gradient(circle,rgba(235,240,255,1)_0%,rgba(248,250,255,0)_70%)] rounded-full pointer-events-none'></div>
                    {/* یاکس سمت راست */}
                    <div className=' flex flex-col items-center gap-12 z-20 w-full lg:w-auto'>
                        <ChargeCryptoBox />
                        <ChargeCryptoBox />
                    </div>
                    {/* گوشی موبایل */}
                    <div className='relative z-20 opacity-100 scale-100'>
                        <div className='relative flex flex-col w-70 h-130 ring-1 ring-gray-100 bg-white rounded-45px shadow-[0_20px_50px_-10px_rgba(45,55,72,0.15)] border-8 border-white overflow-hidden'>
                            {/* رنگ موج درا پشت گوشی */}
                            <div className='absolute w-full top-0 left-0 h-[60%] bg-shapeMobile rounded-b-[40%] scale-x-150 origin-top z-10'></div>
                            {/* گوشی موبایل */}
                            <div className='flex justify-between items-center px-6 pt-5 pb-2 relative z-20'>
                                <span className='text-11px font-bold'>12:00</span>
                                <div className="flex gap-1.5 items-center">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#34405a">
                                        <path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path>
                                    </svg>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#34405a">
                                        <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='flexCenter flex-col flex-1 z-20 relative mt-6 px-5'>
                                <div className='size-15 rounded-full flexCenter shadow-lg mb-5 shadow-blue-200'>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.078 20.25H10.155L11.531 11.517H15.011C18.423 11.517 20.301 9.839 20.655 6.444C20.817 4.887 20.407 3.593 19.467 2.651C18.665 1.849 17.303 1.5 15.465 1.5H8.761C8.243 1.5 7.795 1.868 7.708 2.378L5.275 17.842C5.176 18.472 5.662 19.043 6.3 19.043H7.406L7.078 20.25Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <p className='text-11px font-bold mb-1'>موجودی حساب پی پال شما</p>
                                <h4 className='mt-2.5 text-26px font-black tracking-wide mb-10 font-sans'>$210</h4>
                                <div className='flex w-full gap-3 mt-auto mb-12'>
                                    <Button  color='#4285f4' className='text-xs rounded-lg shadow-[0_20px_50px_-10px_rgba(45,55,72,0.15)] font-bold'>نقد درآمد</Button>
                                    <Button  color='#20c997' className='text-xs shadow-[0_20px_50px_-10px_rgba(45,55,72,0.15)] rounded-lg font-extrabold'>شارژ حساب</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* یاکس سمت راست */}

                    <div className=' flex flex-col items-center gap-12 z-20 w-full lg:w-auto'>
                        <ChargeCryptoBox />
                        <ChargeCryptoBox />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ChargeCrypto