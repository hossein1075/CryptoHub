import CryptoTable from '@/components/modules/CryptoTable/CryptoTable'
import { Button } from '@mantine/core'
import React from 'react'

function ListPriceCrypto() {
    return (
        <>
            <section className='mt-15 font-lahze'>
                <div className="container">
                    <div>
                        <div>
                            <p>قیمت لحظه‌ای مهم‌ترین ارزها</p>
                            <h2>آخرین قیمت ارزهای دیجیتال</h2>
                        </div>
                        <div>
                            <button>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                                نمایش لیست
                            </button>
                            <button>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                    </path>
                                </svg>
                                نمایش مربعی
                            </button>

                        </div>
                    </div>
                    <CryptoTable />
                </div>
            </section>
        </>
    )
}

export default ListPriceCrypto