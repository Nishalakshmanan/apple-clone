import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function Side_AirPods({ sidebar2, setSidebar2, setSidebarOpen }) {
  return sidebar2 !== "sideairpods" ? (
    ""
  ) : (
    <div className="bg-[#1D1D1F] w-full h-full flex flex-col justify-start gap-5 pb-4 text-[#E8E8E0] fixed top-0 z-40 overflow-y-scroll">
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
        {/* Explore AirPods */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">Explore AirPods</p>
          <ul className="text-xl sm:text-2xl font-bold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Explore All AirPods</Link></li>
            <li><Link to="#" className="whitespace-nowrap">AirPods 4</Link></li>
            <li><Link to="#" className="whitespace-nowrap">AirPods Pro 3</Link></li>
            <li><Link to="#" className="whitespace-nowrap">AirPods Max</Link></li>
            <li><Link to="#" className="text-sm font-normal whitespace-nowrap">Compare AirPods</Link></li>
          </ul>
        </div>

        {/* Shop AirPods */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">Shop AirPods</p>
          <ul className="text-sm font-semibold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Shop AirPods</Link></li>
            <li><Link to="#" className="whitespace-nowrap">AirPods Accessories</Link></li>
          </ul>
        </div>

        {/* More from AirPods */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">More from AirPods</p>
          <ul className="text-sm font-semibold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">AirPods Support</Link></li>
            <li><Link to="#" className="whitespace-nowrap">AppleCare</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple Music</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Side_AirPods;
