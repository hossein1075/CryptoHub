import React from 'react'

function ContactSupportBox() {
    return (
        <div className='group rounded-30px bg-white border border-indigo-50 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transform hover:-translate-y-1 hover:border-indigo-100 transition ease-in duration-500 hover:shadow-[0_24px_60px_rgba(66,112,250,0.12)] '>
            <div className='size-14 rounded-full bg-blue-600/10 text-blue-600 mb-5 flexCenter group-hover:bg-blue-600 group-hover:text-white transition duration-300 ease-in-out'>
               <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18 19.5 19.5 0 0 1 6 12.81 19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8 9.68a16 16 0 0 0 6.32 6.32l1.24-1.24a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z">
                  </path>
                </svg>
            </div>
            <h3 className='text-17px font-black mb-3 text-gray-900'>تماس تلفنی</h3>
            <p className='text-13px leading-7 font-medium text-gray-500'>برای پیگیری سریع درخواست‌ها می‌توانید با پشتیبانی تماس بگیرید.</p>
            <p className='text-13px text-blue-600 font-black'>021-12345678</p>
        </div>
    )
}

export default ContactSupportBox