import ListServiceBox from '@/components/modules/listServiceBox/ListServiceBox'
import React from 'react'

function ListService() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <h2 className='mb-6 text-lg md:text-xl lg:text-3xl font-extrabold text-slate-700'>دسته بندی سرویس ها</h2>
                {/* slider */}
                <div className='flex items-center py-6'>
                    <ListServiceBox/>
                    <ListServiceBox/>
                    <ListServiceBox/>
                    <ListServiceBox/>
                </div>
            </div>
        </section>
    )
}

export default ListService