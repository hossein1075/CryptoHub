import BusinessCryptoBox from '@/components/modules/MainHome/BusinessCryptoBox/BusinessCryptoBox'
import { Button } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

function BusinessCrypto() {
    return (
        <>
            <section className='mt-15 font-lahze'>
                <div className="container">
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mb-20 lg:mb-5 font-lahze'>
                        <div className='relative flexCenter hidden lg:block w-full h-125 flexCenter order-2 lg:order-1'>
                            {/* picture */}
                            <Image width={600} height={433} src='/images/home/digital-currency-main-minified.avif' alt='imageBusiness' />
                            {/* svg */}
                            <div className='absolute top-0 left-[20%] z-20'>
                                <div className='size-14 bg-emerald-600 rounded-full flexCenter transform rotate-12 border-4 border-white'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4H8V9h8v3h-3v4z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='absolute top-[-7.5%] left-[51%] z-20'>
                                <div className='size-12 bg-gray-800 rounded-full shadow-lg flexCenter transform -rotate-12 border-4 border-gray-800'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4H8V9h8v3h-3v4z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='absolute top-20 right-[2%] z-20'>
                                <div className='size-16 bg-blue-500 rounded-full shadow-lg flexCenter transform rotate-6 border-4 border-white'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4H8V9h8v3h-3v4z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8 pl-0 lg:pl-10 order-1 lg:order-2'>
                            <h1 className='text-lg md:text-xl lg:text-3xl font-black leading-tight'>خرید و فروش ارز دیجیتال</h1>
                            <p className='leading-8.75 text-justify lg:text-right'>
                                اگر به دنبال راه سریع، امن و آسان برای خرید و فروش ارزهای دیجیتال هستید، تی ارز انتخابی ایده‌آل برای شماست. اینجا می‌توانید بدون دغدغه محدودیت صرافی‌های خارجی، در محیطی امن و سریع، به معامله بیش از ۸۰۰ ارز دیجیتال بپردازید. تمامی مراحل به صورت آنی و بدون کارمزد انجام می‌شوند تا تجربه‌ای آسان و رضایت‌بخش را برای شما فراهم کنند.
                            </p>
                            <div className='flex flex-col xs:flex-row gap-4 justify-center xs:justify-start'>


                                <Button size='lg' color='#2563eb' className='shadow-lg shadow-blue-200 font-bold'>
                                    تمامی ارزهای دیجیتال
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* boxCrypto */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-center gap-4'>
                        {/* box */}
                        <BusinessCryptoBox/>
                        <BusinessCryptoBox/>
                        <BusinessCryptoBox/>
                        <BusinessCryptoBox/>
                        <BusinessCryptoBox/>
                        <BusinessCryptoBox/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BusinessCrypto