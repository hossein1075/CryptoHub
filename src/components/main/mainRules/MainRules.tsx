import RulseAside from '@/components/template/rules/RulseAside/RulseAside'
import React from 'react'

function MainRules() {
  return (
    <main>
      <div className="container">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 py-8'>
        {/* box */}
        <aside className='lg:col-span-4 xl:col-span-3'>
          <RulseAside />
        </aside>
        {/* section */}
        <div className='lg:col-span-8 xl:col-span-9 space-y-5'>

        </div>
      </div>
      </div>
    </main>
  )
}

export default MainRules