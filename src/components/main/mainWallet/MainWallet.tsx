import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'
import Assest from '@/components/template/wallet/Assest/Assest'
import MyWallet from '@/components/template/wallet/MyWallet/MyWallet'
import TransactionWallet from '@/components/template/wallet/TransactionWallet/TransactionWallet'
import React from 'react'

function MainWallet() {
  return (
    <main>
      <div className="container">
        <BreadCrumb/>
        <MyWallet />
        <Assest />
        <TransactionWallet />
      </div>
    </main>
  )
}

export default MainWallet