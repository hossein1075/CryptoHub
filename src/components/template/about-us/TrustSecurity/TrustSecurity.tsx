import TrustSecurityBox from '@/components/modules/mainAboutUs/TrustSecurityBox/TrustSecurityBox'
import TitleSec from '@/components/modules/TitleSec/TitleSec'
import React from 'react'

function TrustSecurity() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <div className='shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 md:p-10 bg-white rounded-40px border border-indigo-50'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
                        <div className='lg:col-span-5'>
                            <TitleSec />
                            <h2 className='text-28px md:text-4xl font-black text-gray-900 leading-[1.8] mb-4'>امنیت برای ما یک ویژگی اضافه نیست؛ پایه محصول است</h2>
                            <p className='text-sm text-gray-500 leading-8 font-medium'>ما در طراحی تجربه کاربری، زیرساخت فنی، فرآیندهای پشتیبانی و مدیریت حساب کاربری، امنیت و شفافیت را به عنوان اصل اصلی در نظر می‌گیریم.</p>
                        </div>
                        <div className='lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {/* # */}
                            <TrustSecurityBox/>
                            <TrustSecurityBox/>
                            <TrustSecurityBox/>
                            <TrustSecurityBox/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustSecurity