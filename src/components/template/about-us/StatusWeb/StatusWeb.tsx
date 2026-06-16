import StatusWebBox from '@/components/modules/StatusWebBox/StatusWebBox'
import TitleSec from '@/components/modules/TitleSec/TitleSec'
import React from 'react'

function StatusWeb() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <TitleSec/>
                <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5'>
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