import Link from 'next/link'
import React from 'react'

function CryptoListFooter() {
    return (
        <>
            <Link href='#' className='hover:text-blue-600 transition-colors duration-500 ease-out'>خرید بیت کوین</Link>
            <span className='text-gray-300'>•</span>
        </>
    )
}

export default CryptoListFooter