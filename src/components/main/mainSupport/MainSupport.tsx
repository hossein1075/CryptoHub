import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'
import ContactSupport from '@/components/template/support/ContactSupport/ContactSupport'
import GuidSupport from '@/components/template/support/GuidSupport/GuidSupport'
import React from 'react'

function MainSupport() {
  return (
    <main>
      <div className="container">
        <BreadCrumb/>
        <ContactSupport/>
        <GuidSupport/>
      </div>
    </main>
  )
}

export default MainSupport