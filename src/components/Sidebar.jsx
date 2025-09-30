import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import Side_Store from "./Side_Store";
import Side_Mac from "./Side_Mac";
import Side_iPad from "./Side_IPad";
import Side_iPhone from "./Side_IPhone";
import Side_Watch from "./Side_Watch";
import Side_AirPods from "./Side_AirPods";
import Side_Tv from "./Side_Tv";
import Side_Entertainment from "./Side_Entertainment";
import Side_Accessories from "./Side_Accessories";
import Side_Support from "./Side_Support";
function Sidebar({ isOpen, setSidebarOpen }) {
  const[sidebar2,setSidebar2]=useState(null)
  function handleSidebar2(sidebar){
    setSidebar2((prev)=>prev===sidebar?null:sidebar)
  }
  return (
    <div>
    <div
      className={`bg-[#1D1D1F] text-[#E8E8E0] h-full w-full fixed z-30 top-0 left-0 pt-4 px-6 transform transition-transform duration-200 ease-in-out ${
        isOpen ? "-translate-y-0" : "-translate-y-full"
      }`}
    >
      
      <RxCross1
        className="ml-auto text-lg"
        onClick={() => setSidebarOpen(false)}
      />
      <div className="text-3xl flex flex-col gap-3 p-7 font-semibold">
        <Link onClick={()=>handleSidebar2("sidestore")}> Store</Link>
        <Link onClick={()=>handleSidebar2("sidemac")}>Mac</Link>
        <Link onClick={()=>handleSidebar2("sideipad")}>iPad</Link>
        <Link onClick={()=>handleSidebar2("sideiphone")}>iPhone</Link>
        <Link onClick={()=>handleSidebar2("sidewatch")}>Watch</Link>
        <Link onClick={()=>handleSidebar2("sideairpods")}>AirPods</Link>
        <Link onClick={()=>handleSidebar2("sidetv")}>TV & Home</Link>
        <Link onClick={()=>handleSidebar2("sideentertainment")}>Entertainment</Link>
        <Link onClick={()=>handleSidebar2("sideaccessories")}>Accessories</Link>
        <Link onClick={()=>handleSidebar2("sidesupport")}>Support</Link>
      </div>
    </div>
   <Side_Store sidebar2={sidebar2} setSidebarOpen={setSidebarOpen} setSidebar2={setSidebar2}/>
   <Side_Mac sidebar2={sidebar2} setSidebarOpen={setSidebarOpen} setSidebar2={setSidebar2}></Side_Mac>
   <Side_iPad sidebar2={sidebar2} setSidebarOpen={setSidebarOpen} setSidebar2={setSidebar2}></Side_iPad>
   <Side_iPhone sidebar2={sidebar2} setSidebarOpen={setSidebarOpen} setSidebar2={setSidebar2}></Side_iPhone>
   <Side_Watch sidebar2={sidebar2} setSidebarOpen={setSidebarOpen} setSidebar2={setSidebar2}></Side_Watch>
   <Side_AirPods sidebar2={sidebar2} setSidebarOpen={setSidebarOpen} setSidebar2={setSidebar2}></Side_AirPods>
   <Side_Tv sidebar2={sidebar2} setSidebarOpen={setSidebarOpen} setSidebar2={setSidebar2}></Side_Tv>
   <Side_Entertainment sidebar2={sidebar2} setSidebarOpen={setSidebarOpen} setSidebar2={setSidebar2}></Side_Entertainment>
   <Side_Accessories sidebar2={sidebar2} setSidebarOpen={setSidebarOpen} setSidebar2={setSidebar2}></Side_Accessories>
   <Side_Support sidebar2={sidebar2} setSidebarOpen={setSidebarOpen} setSidebar2={setSidebar2}></Side_Support>
    </div>
  );
}
export default Sidebar;
