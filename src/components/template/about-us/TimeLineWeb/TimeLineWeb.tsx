import TimeLineWebBox from '@/components/modules/mainAboutUs/TimeLineWebBox/TimeLineWebBox'
import TitleSec from '@/components/modules/TitleSec/TitleSec'
import React from 'react'

function TimeLineWeb() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <div className='mx-auto flexCenter flex-col mb-10'>
                    <TitleSec />
                    <h2 className='text-28px md:text-4xl font-black text-gray-900 leading-[1.8] mb-4'>قدم‌هایی که تا امروز برداشتیم</h2>
                </div>

                <div className='relative'>
                    {/* line */}
                    <div className='hidden md:block absolute top-0 bottom-0 right-1/2 translate-x-1/2 w-px bg-indigo-100 z-20'></div>
                    {/* content */}
                    <div className='space-y-6'>
                        {/* # */}
                       <TimeLineWebBox/>
                       <TimeLineWebBox/>
                       <TimeLineWebBox/>
                       <TimeLineWebBox/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TimeLineWeb