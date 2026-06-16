import CryptoTable from '@/components/modules/MainHome/CryptoTable/CryptoTable'
import { Button } from '@mantine/core'
import React from 'react'

function ListPriceCrypto() {
    return (
        <>
            <section className='mt-15 font-lahze'>
                <div className="container">
                    {/* header section */}
                    <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
                        <div className='text-right w-full md:w-auto mb-6 md:mb-0'>
                            <p className='text-sm mb-1 text-gray-500'>قیمت لحظه‌ای مهم‌ترین ارزها</p>
                            <h2 className='text-2xl font-extrabold text-gray-900'>آخرین قیمت ارزهای دیجیتال</h2>
                        </div>
                        <div className='flex items-center gap-6 text-sm'>
                            <button className='flex items-center gap-2 font-bold text-gray-800'>
                                <span className='font-bold'>

                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </span>
                                <span className='font-bold'>
                                    نمایش لیست
                                </span>
                            </button>
                            <button className='flex items-center gap-2 text-gray-400 hover:text-gray-800 transition duration-150 ease-linear'>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                    </path>
                                </svg>
                                نمایش مربعی
                            </button>

                        </div>
                    </div>
                    {/* table */}
                    <CryptoTable />
                    {/* button */}
                    <div className='flex justify-center mt-8 mb-8'>
                        <Button variant="white" size="sm" className="text-sm! shadow-sm rounded-full! font-normal! text-gray-600! border-2 border-gray-200!">
                            مشاهده قیمت تمام ارزهای دیجیتال
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ListPriceCrypto