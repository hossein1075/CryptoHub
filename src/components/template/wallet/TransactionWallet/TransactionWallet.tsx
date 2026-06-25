import TransactionWalletTable from '@/components/modules/MainWallet/TransactionWalletTable/TransactionWalletTable'
import React from 'react'

function TransactionWallet() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <div className='rounded-34px border border-indigo-50 bg-white/90 shadow-[0_24px_70px_rgba(15,23,42,0.07)] overflow-hidden backdrop-blur-xl'>
                    <div className='p-5 md:p-6 border border-indigo-50 flex flex-col md:flex-row md:items-center md:justify-between gap-3'>
                        <div>
                            <h3 className='text-gray-900 text-lg md:text-xl font-black'>تاریخچه تراکنش‌ها</h3>
                            <p className='font-medium mt-1 text-13px text-gray-500'>آخرین واریز، برداشت و انتقال‌های کیف پول شما</p>
                        </div>
                    </div>
                    <TransactionWalletTable/>
                </div>
            </div>
        </section>
    )
}

export default TransactionWallet