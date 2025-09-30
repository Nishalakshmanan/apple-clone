import { useState,useRef } from "react";
import { Link} from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import Sidebar from "./Sidebar.jsx"
import Store from "./Store.jsx";
import Mac from "./Mac.jsx";
import IPad from "./IPad.jsx";
import IPhone from "./IPhone.jsx";
import Watch from "./Watch.jsx";
import AirPods from "./AirPods.jsx";
import Tv from "./Tv.jsx";
import Entertainment from "./Entertainment.jsx";
import Accessories from "./Accessories.jsx";
import Support from "./Support.jsx";
function Navbar() {
  const[sidebarOpen,setSidebarOpen]=useState(false)
   const[dropDown,setDropDown]=useState(null)//string based state variable to reduce multiple true/false based state
   function handleDropDown(trigmenu){
    setDropDown((prev)=>prev===trigmenu?null:trigmenu)//the callback will automatically written as it is written without curly braces
   }
    return (
    <>
    <nav className="bg-[#1D1D1F] text-[#dbdada] text-[10.8px] font-medium h-10 px-6 w-full fixed top-0 z-20 flex justify-between md-lg:gap-8 md-lg:justify-center lg:gap-10  items-center" >
      <FaApple className="size-5 shrink-0 -translate-y-[1.9px]" />
      <ul className="hidden gap-8 lg:gap-10 md-lg:flex">
        <li onClick={()=>handleDropDown("store")}><Link>Store</Link></li>
        <li onClick={()=>handleDropDown("mac")}><Link>Mac</Link></li>
        <li onClick={()=>handleDropDown("ipad")}><Link>iPad</Link></li>
        <li onClick={()=>handleDropDown("iphone")}><Link>iPhone</Link></li>
        <li onClick={()=>handleDropDown("watch")}> <Link>Watch</Link></li>
        <li onClick={()=>handleDropDown("airpods")}><Link>AirPods</Link></li>
        <li onClick={()=>handleDropDown("tv")}><Link className="whitespace-nowrap">TV & Home</Link></li>
        <li onClick={()=>handleDropDown("entertainment")}><Link>Entertainment</Link></li>
        <li onClick={()=>handleDropDown("accessories")}> <Link>Accessories</Link></li>
        <li onClick={()=>handleDropDown("support")}><Link>Support</Link></li>   
     </ul>
      <div className="flex gap-5 xs:gap-8 lg:gap-10">
        <IoSearchSharp className="size-5 shrink-0" />
        <IoBagOutline className="size-5 shrink-0 -translate-y-[1.8px]" />
        <HiOutlineMenuAlt4 className="size-5 shrink-0 md-lg:hidden" onClick={()=>setSidebarOpen(true)}/>
      </div> 
    </nav>
    <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></Sidebar>
    <Store dropDown={dropDown}></Store>
    <Mac dropDown={dropDown}></Mac>
    <IPad dropDown={dropDown}></IPad>
    <IPhone dropDown={dropDown}></IPhone>
    <Watch dropDown={dropDown}></Watch>
    <AirPods dropDown={dropDown}></AirPods>
    <Tv dropDown={dropDown}></Tv>
    <Entertainment dropDown={dropDown}></Entertainment>
    <Accessories dropDown={dropDown}></Accessories>
    <Support dropDown={dropDown}></Support>
  </>
  );
}
export default Navbar