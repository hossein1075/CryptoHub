import React from 'react'

function ChargeCryptoBox() {
    return (
        <>
            <div className='bg-white rounded-20px p-4 flex items-center gap-4 w-full sm:w-85 shadow-[0_15px_40px_-15px_rgba(45,55,72,0.08)] '>
                <div className='size-12 rounded-2xl bg-boxMobile flexCenter shrink-0'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.078 20.25H10.155L11.531 11.517H15.011C18.423 11.517 20.301 9.839 20.655 6.444C20.817 4.887 20.407 3.593 19.467 2.651C18.665 1.849 17.303 1.5 15.465 1.5H8.761C8.243 1.5 7.795 1.868 7.708 2.378L5.275 17.842C5.176 18.472 5.662 19.043 6.3 19.043H7.406L7.078 20.25Z" fill="white"></path>
                        <path d="M10.155 20.25H7.078L6.724 22.493C6.634 23.064 7.086 23.585 7.665 23.585H10.518C10.957 23.585 11.336 23.272 11.411 22.842L11.666 21.229L11.838 20.25H10.155Z" fill="#003087"></path>
                    </svg>
                </div>
                <div>
                    <h3 className='mb-1.5 text-15px font-bold'>شارژ و نقد حساب پی پال</h3>
                    <p className='text-xs'>پی‌پال خود را سریع و بدون محدودیت شارژ و نقد کنید!</p>
                </div>
            </div>
        </>
    )
}

export default ChargeCryptoBox