import TrustSecurityBox from '@/components/modules/mainAboutUs/TrustSecurityBox/TrustSecurityBox'
import TitleSec from '@/components/modules/TitleSec/TitleSec'
import React from 'react'

function TrustSecurity() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <div>
                    <div>
                        <div>
                            <TitleSec />
                            <h2>امنیت برای ما یک ویژگی اضافه نیست؛ پایه محصول است</h2>
                            <p>ما در طراحی تجربه کاربری، زیرساخت فنی، فرآیندهای پشتیبانی و مدیریت حساب کاربری، امنیت و شفافیت را به عنوان اصل اصلی در نظر می‌گیریم.</p>
                        </div>
                        <div>
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