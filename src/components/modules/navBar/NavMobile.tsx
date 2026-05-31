import Image from 'next/image'
import React from 'react'

function NavMobile() {
  return (
     <nav>
        <div>
            <div>
                <Image src='' alt= 'logo' width={44} height={44}/>
                <div>
                    <h2>BlueTrade</h2>
                    <p>مدیریت مالی، بازار و خدمات دیجیتال</p>
                </div>
            </div>
            <div>
                <button></button>
                <button></button>
            </div>
        </div>
    </nav>
  )
}

export default NavMobile