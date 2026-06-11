import React from 'react'

function BusinessCryptoBox() {
    return (
        <>
            <div className='group relative font-lahze overflow-hidden rounded-3xl border-2 border-white/40 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-in hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]'>
                <div className='absolute inset-0 bg-linear-to-br bg-amber-500/5 via-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in'></div>
                <div className='relative flex items-center justify-between'>
                    <div className='inline-flex items-center gap-1 rounded-full bg-red-50 text-red-600 text-xs font-extrabold px-2.5 py-1.5 ltr border border-red-100'>
                        <span>▼</span>
                        {/* ▲ */}
                        <span>3.01%</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='text-right'>
                            <h3 className='text-sm font-extrabold'>بیت کوین</h3>
                            <p className='text-xs font-semibold mt-1 ltr'>$ 80,269.99</p>
                        </div>
                        <div className='size-12 flexCenter bg-amber-500 shrink-0 shadow-sm shadow-amber-500/30'>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                                <path d="M14.5 10c1.5 0 2.5-1 2.5-2.5S16 5 14.5 5H8v14h6.5c1.5 0 3-1 3-2.5S16 10 14.5 10zm-4-3h3.5c.5 0 1 .5 1 1s-.5 1-1 1H10.5V7zm4 10h-4v-2h4c.5 0 1 .5 1 1s-.5 1-1 1z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessCryptoBox