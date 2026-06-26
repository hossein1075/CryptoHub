import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'
import ContactSupport from '@/components/template/support/ContactSupport/ContactSupport'
import FormSupport from '@/components/template/support/FormSupport/FormSupport'
import GuidSupport from '@/components/template/support/GuidSupport/GuidSupport'
import React from 'react'

function MainSupport() {
  return (
    <main>
      <div className="container">
        <BreadCrumb/>
        <ContactSupport/>
        <FormSupport/>
        <GuidSupport/>
      </div>
    </main>
  )
}

export default MainSupport