import StatusWebBox from '@/components/modules/StatusWebBox/StatusWebBox'
import TitleSec from '@/components/modules/TitleSec/TitleSec'
import React from 'react'

function StatusWeb() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <TitleSec/>
                <div>
                   <StatusWebBox/>
                   <StatusWebBox/>
                   <StatusWebBox/>
                   <StatusWebBox/>
                </div>
            </div>
        </section>
    )
}

export default StatusWeb