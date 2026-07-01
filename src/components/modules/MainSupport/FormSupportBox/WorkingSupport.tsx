import React from 'react'
import WorkingSupportBox from '../WorkingSupportBox/WorkingSupportBox'

function WorkingSupport() {
  return (
    <div className='rounded-32px border border-indigo-50 bg-white p-6  shadow-[0_18px_45px_rgba(15,23,42,0.06)]'>
            <h3 className='mb-3 text-gray-900 font-black text-lg'>ساعات پاسخگویی</h3>
            <div className='space-y-3'>
              {/* # */}
             <WorkingSupportBox/>
             <WorkingSupportBox/>
             <WorkingSupportBox/>
            </div>
    </div>
  )
}

export default WorkingSupport