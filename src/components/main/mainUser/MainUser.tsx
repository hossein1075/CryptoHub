import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'
import UserInfo from '@/components/template/p-user/UserInfo/UserInfo'
import React from 'react'

function MainUser() {
  return (
    <main>
      <div className='container'>
        <BreadCrumb/>
        <UserInfo/>
      </div>
    </main>
  )
}

export default MainUser