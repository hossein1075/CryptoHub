import MyWalletSecLeft from '@/components/modules/MainWallet/MyWalletSecLeft/MyWalletSecLeft'
import MyWalletSecRight from '@/components/modules/MainWallet/MyWalletSecRight/MyWalletSecRight'
import React from 'react'

function MyWallet() {
  return (
    <section className='mt-15 font-lahze'>
        <div className="contaner">
            <div>
              <MyWalletSecRight/>
              <MyWalletSecLeft/>
            </div>
        </div>
    </section>
  )
}

export default MyWallet