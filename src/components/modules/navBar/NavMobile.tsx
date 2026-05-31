import Image from 'next/image'
import React from 'react'
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from 'react-icons/io';
function NavMobile() {
  return (
    <nav>
      <div>
        <div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 3l7 4v10l-7 4-7-4V7l7-4z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 7l4 2.3v5.4L12 17l-4-2.3V9.3L12 7z"></path>
            </svg>
          </div>
          <div>
            <h2>BlueTrade</h2>
            <p>مدیریت مالی، بازار و خدمات دیجیتال</p>
          </div>
        </div>
        <div>
          <button>
            <IoIosSearch />
          </button>
          <button>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavMobile

