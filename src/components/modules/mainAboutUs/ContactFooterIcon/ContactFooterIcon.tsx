import Link from 'next/link'
import React from 'react'

function ContactFooterIcon() {
    return (
        <Link href='#'>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4L12 13 2 4"></path>
                <path d="M2 4h20v16H2z"></path>
            </svg>
        </Link>
    )
}

export default ContactFooterIcon