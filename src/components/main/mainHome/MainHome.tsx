import Advertise from '@/components/template/home/Advertise/Advertise'
import BusinessCrypto from '@/components/template/home/BusinessCrypto/BusinessCrypto'
import Calculator from '@/components/template/home/Calculator/Calculator'
import ChargeCrypto from '@/components/template/home/ChargeCrypto/ChargeCrypto'
import GifCarts from '@/components/template/home/GifCarts/GifCarts'
import Introduce from '@/components/template/home/introduce/Introduce'
import ListPriceCrypto from '@/components/template/home/ListPriceCrypto/ListPriceCrypto'
import ListService from '@/components/template/home/ListService/ListService'
import SignHome from '@/components/template/home/SignHome/SignHome'
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
      <GifCarts/>
      <SignHome/>
    </main>
  )
}

export default MainHome