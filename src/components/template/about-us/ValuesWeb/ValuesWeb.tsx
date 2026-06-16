import TitleSec from '@/components/modules/TitleSec/TitleSec'
import ValuesWebBox from '@/components/modules/mainAboutUs/ValuesWebBox/ValuesWebBox'
import React from 'react'

function ValuesWeb() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <div className='mx-auto flexCenter flex-col mb-10'>
                    <TitleSec />
                    <h2 className='text-28px md:text-4xl font-black text-gray-900 leading-[1.8] mb-4'>اصولی که مسیر ما را مشخص می‌کند</h2>
                    <p className='text-sm text-gray-500 leading-8 font-medium'>تصمیم‌ها، توسعه محصول و نحوه ارتباط ما با کاربران بر پایه چند اصل کلیدی شکل گرفته است.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
                    <ValuesWebBox/>
                    <ValuesWebBox/>
                    <ValuesWebBox/>
                    <ValuesWebBox/>
                </div>

            </div>
        </section>
    )
}

export default ValuesWeb