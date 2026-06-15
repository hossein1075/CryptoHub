import Link from 'next/link'
import React from 'react'

function BreadCrumb() {
    return (
        <div className='pt-8 pb-4 flex flex-wrap items-center gap-2 text-xs font-bold text-gray-400'>
            <Link href='#' className='hover:text-blue-600 transition-colors duration-300 ease-linear'>خانه</Link>
            <span>/</span>
            <Link href='#' className='text-blue-600'>درباره ما</Link>
        </div>
    )
}

export default BreadCrumb