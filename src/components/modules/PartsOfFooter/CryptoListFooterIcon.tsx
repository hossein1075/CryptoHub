import Link from 'next/link'
import React from 'react'

function CryptoListFooterIcon() {
    return (
        <Link href='#' className='hover:text-blue-600 transition-colors duration-500 ease-out'>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="4" strokeWidth="2"></rect>
                <circle cx="12" cy="12" r="4" strokeWidth="2"></circle>
                <path d="M16.5 7.5v.01" strokeWidth="2"></path>
            </svg>
        </Link>
    )
}

export default CryptoListFooterIcon