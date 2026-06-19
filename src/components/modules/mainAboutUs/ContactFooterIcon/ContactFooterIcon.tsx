import Link from 'next/link'
import React from 'react'

function ContactFooterIcon() {
    return (
        <Link href='#' className='size-10 rounded-2xl bg-slate-50 border border-indigo-50 text-blue-600 flexCenter hover:text-white hover:bg-blue-600 transition duration-500 ease-in-out'>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4L12 13 2 4"></path>
                <path d="M2 4h20v16H2z"></path>
            </svg>
        </Link>
    )
}

export default ContactFooterIcon