import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
function Side_Accessories({ sidebar2, setSidebar2, setSidebarOpen }) {
  return sidebar2 !== "sideaccessories" ? (
    ""
  ) : (
    <div className="bg-[#1D1D1F] w-full h-full flex flex-col justify-start gap-8 pb-4 text-[#E8E8E0] fixed top-0 z-40 overflow-y-scroll">
      {/* Header */}
            <div className="flex justify-between items-center pt-4 px-4">
              <IoIosArrowBack className="text-2xl" onClick={() => setSidebar2(null)} />
              <RxCross1
                className="text-lg"
                onClick={() => {
                  setSidebarOpen(false);
                  setSidebar2(null);
                }}
              />
            </div>
      {/* Content */}
      <div className="px-10 xs:px-14 flex flex-col gap-8">
        {/* Shop Accessories */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">Shop Accessories</p>
          <ul className="text-xl sm:text-2xl font-bold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Shop All Accessories</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Mac</Link></li>
            <li><Link to="#" className="whitespace-nowrap">iPad</Link></li>
            <li><Link to="#" className="whitespace-nowrap">iPhone</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple Watch</Link></li>
            <li><Link to="#" className="whitespace-nowrap">AirPods</Link></li>
            <li><Link to="#" className="whitespace-nowrap">TV & Home</Link></li>
          </ul>
        </div>

        {/* Explore Accessories */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">Explore Accessories</p>
          <ul className="text-sm font-semibold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Made by Apple</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Beats by Dr. Dre</Link></li>
            <li><Link to="#" className="whitespace-nowrap">AirTag</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Side_Accessories;
