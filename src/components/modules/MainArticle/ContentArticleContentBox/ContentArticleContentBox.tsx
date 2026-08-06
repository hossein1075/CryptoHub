import React from 'react'

function ContentArticleContentBox() {
    return (
        <div className='w-11 h-11 rounded-2xl bg-slate-50 text-blue-600 hover:bg-blue-600 transition duration-300 ease-in hover:text-white flex items-center justify-center border border-indigo-50 mb-4'>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"></path>
                <path d="M16 6l-4-4-4 4"></path>
                <path d="M12 2v13"></path>
            </svg>
        </div>
    )
}

export default ContentArticleContentBox