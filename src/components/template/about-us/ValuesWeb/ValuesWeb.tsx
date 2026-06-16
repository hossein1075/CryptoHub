import TitleSec from '@/components/modules/TitleSec/TitleSec'
import ValuesWebBox from '@/components/modules/ValuesWebBox/ValuesWebBox'
import React from 'react'

function ValuesWeb() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <div>
                    <TitleSec />
                    <h2>اصولی که مسیر ما را مشخص می‌کند</h2>
                    <p>تصمیم‌ها، توسعه محصول و نحوه ارتباط ما با کاربران بر پایه چند اصل کلیدی شکل گرفته است.</p>
                </div>
                <div>
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