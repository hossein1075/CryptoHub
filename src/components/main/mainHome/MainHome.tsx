import Advertise from '@/components/template/home/Advertise/Advertise'
import BusinessCrypto from '@/components/template/home/BusinessCrypto/BusinessCrypto'
import Calculator from '@/components/template/home/Calculator/Calculator'
import ChargeCrypto from '@/components/template/home/ChargeCrypto/ChargeCrypto'
import Introduce from '@/components/template/home/introduce/Introduce'
import ListPriceCrypto from '@/components/template/home/ListPriceCrypto/ListPriceCrypto'
import ListService from '@/components/template/home/ListService/ListService'
import React from 'react'

function MainHome() {
  return (
    <main className='mt-40'>
      <Introduce/>
      <Calculator/>
      <ListService/>
      <ChargeCrypto/>
      <BusinessCrypto/>
      <ListPriceCrypto/>
      <Advertise/>
    </main>
  )
}

export default MainHome