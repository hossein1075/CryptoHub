import Link from 'next/link'
import React from 'react'

function QRBtn() {
    return (
        <Link href='#' className='flexCenter gap-2 bg-indigo-50 text-gray-800 text-xs font-bold py-2 rounded-lg hover:bg-blue-100 transition-colors duration-500 ease-out'>
            <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414C17.523 15.3414 16.208 17.6534 12 17.6534C7.792 17.6534 6.477 15.3414 6.477 15.3414C6.477 15.3414 4 11.2384 4 6.4884C4 6.4884 6.84 4.0924 12 4.0924C17.16 4.0924 20 6.4884 20 6.4884C20 11.2384 17.523 15.3414 17.523 15.3414Z" fill="#A4C639"></path>
                <path d="M8.5 8C9.32843 8 10 7.32843 10 6.5C10 5.67157 9.32843 5 8.5 5C7.67157 5 7 5.67157 7 6.5C7 7.32843 7.67157 8 8.5 8Z" fill="#fff"></path>
                <path d="M15.5 8C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5C14.6716 5 14 5.67157 14 6.5C14 7.32843 14.6716 8 15.5 8Z" fill="#fff"></path>
            </svg>
            اپ اندروید
        </Link>
    )
}

export default QRBtn