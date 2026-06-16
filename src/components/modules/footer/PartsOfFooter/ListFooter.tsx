import Link from 'next/link'
import React from 'react'

function ListFooter() {
    return (
        <div className='lg:col-span-1 text-center md:text-right'>
            <h3 className='text-15px font-black text-gray-900 mb-6 relative inline-block'>
                پیوندها
                <span className='absolute -bottom-2 right-1/2 md:right-0 transform translate-x-1/2 md:translate-x-0 w-8 h-1 bg-blue-600 rounded-full'></span>
            </h3>
            <ul className='space-y-4 text-13px text-gray-500 font-medium'>
                <li>
                    <Link href='#' className='hover:text-blue-600 transition-colors duration-500 ease-out relative group'>
                        <span className='absolute top-1/2 right-0 -translate-y-1/2 size-1.5 bg-blue-600 opacity-0 rounded-full group-hover:opacity-100 transition-opacity duration-500 ease-out -mr-3'></span>
                        کیف پول من
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ListFooter