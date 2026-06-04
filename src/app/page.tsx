import NavBar from "@/components/modules/navBar/NavBar";
import SideBar from "@/components/modules/sidebar/SideBar";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Home() {
  return (
  <>
  <div>
    <div>
      {/* crypto */}
      <div>
        <span></span>
        <span>دلار پی پال</span>
        <span>۵۹,۴۰۰ تومان</span>
        <span>
          +۱.۲٪
          <IoIosArrowUp/>
        </span>
      </div>
      <div>
        <span></span>
        <span>دلار پی پال</span>
        <span>۵۹,۴۰۰ تومان</span>
        <span>
          +۱.۲٪
          <IoIosArrowUp/>
        </span>
      </div>
      <div>
        <span></span>
        <span>دلار پی پال</span>
        <span>۵۹,۴۰۰ تومان</span>
        <span>
          +۱.۲٪
          <IoIosArrowDown/>
        </span>
      </div>
      <div>
        <span></span>
        <span>دلار پی پال</span>
        <span>۵۹,۴۰۰ تومان</span>
        <span>
          +۱.۲٪
          <IoIosArrowDown/>
        </span>
      </div>
    </div>
  </div>
  <NavBar/>
  {/* <SideBar/> */}
  </>
  );
}
