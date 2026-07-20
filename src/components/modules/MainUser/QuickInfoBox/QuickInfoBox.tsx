import React from 'react'

function QuickInfoBox() {
  return (
     <div className='rounded-24px bg-white/10 border border-white/15 p-4 backdrop-blur'>
           <div className='flex items-center justify-between gap-3'>
             <span className='text-xs font-black text-white/70'>آخرین ورود</span>
             <span className='size-9 rounded-xl bg-white/10 flexCenter'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"></path>
                  </svg>
             </span>
           </div>
            <p className='mt-2 text-sm font-black'>امروز</p>
        </div>
  )
}

export default QuickInfoBox