import Link from 'next/link'
import React from 'react'

function ContactFooterList() {
    return (
        <>
            <h3 className='text-15px font-black text-gray-900 mb-5 relative inline-block'>
                پیوندها
            </h3>
            <ul className='space-y-4 text-13px text-gray-500 font-medium'>
                <li>
                    <Link href='#' className='hover:text-blue-600 transition-colors duration-500 ease-out'>
                        
                        کیف پول من
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default ContactFooterList