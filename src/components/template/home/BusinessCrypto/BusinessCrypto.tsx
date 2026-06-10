import { Button } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

function BusinessCrypto() {
    return (
        <>
            <section className='mt-15 font-lahze'>
                <div className="container">
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 font-lahze'>
                           <div className='relative flexCenter sm:block w-full h-125 flexCenter order-2 lg:order-1'>
                            {/* svg background */}
                            <Image width={600} height={433} src='/images/home/digital-currency-main-minified.avif' alt='imageBusiness'/>
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
                </div>
            </section>
        </>
    )
}

export default BusinessCrypto