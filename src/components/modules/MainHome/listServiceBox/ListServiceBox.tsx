import React from 'react'

function ListServiceBox() {
    return (
        <>
            {/* box */}
            <div className='w-36 ml-8.75 cursor-pointer flex items-center flex-col group'>
                <div className='size-22.5 bg-white rounded-26px shadow-[0_15px_40px_-15px_rgba(45,55,72,0.12)] flexCenter mb-5 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(45,55,72,0.2)] '>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5" y="4" width="14" height="16" rx="4" stroke="#34405a" strokeWidth="1.5"></rect>
                        <path d="M5 10h14" stroke="#34405a" strokeWidth="1.5"></path>
                        <path d="M5 14h14v2a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-2z" fill="#c4d2f4"></path>
                        <circle cx="9" cy="7" r="1.5" fill="#34405a"></circle>
                        <circle cx="13" cy="7" r="1.5" fill="#34405a"></circle>
                    </svg>
                </div>
                <h3 className='font-bold mb-1.5 text-center text-sm'>اشتراک سایت های خارجی</h3>
                <p className='text-xs text-center'>پرداخت هزینه اشتراک</p>
            </div>
        </>
    )
}

export default ListServiceBox