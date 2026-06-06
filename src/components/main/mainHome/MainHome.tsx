import Calculator from '@/components/template/home/Calculator/Calculator'
import Introduce from '@/components/template/home/introduce/Introduce'
import React from 'react'

function MainHome() {
  return (
    <main className='mt-40'>
      <Introduce/>
      <Calculator/>
    </main>
  )
}

export default MainHome