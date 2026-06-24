import Assest from '@/components/template/wallet/Assest/Assest'
import MyWallet from '@/components/template/wallet/MyWallet/MyWallet'
import TransactionWallet from '@/components/template/wallet/TransactionWallet/TransactionWallet'
import React from 'react'

function MainWallet() {
  return (
    <main>
      <MyWallet/>
      <Assest/>
      <TransactionWallet/>
    </main>
  )
}

export default MainWallet