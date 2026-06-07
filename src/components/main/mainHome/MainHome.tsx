import Calculator from '@/components/template/home/Calculator/Calculator'
import Introduce from '@/components/template/home/introduce/Introduce'
import ListService from '@/components/template/home/ListService/ListService'
import React from 'react'

function MainHome() {
  return (
    <main className='mt-40'>
      <Introduce/>
      <Calculator/>
      <ListService/>
    </main>
  )
}

export default MainHome