import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function Side_Tv({ sidebar2, setSidebar2, setSidebarOpen }) {
  return sidebar2 !== "sidetv" ? (
    ""
  ) : (
    <div className="bg-[#1D1D1F] w-full min-h-screen relative flex flex-col justify-start gap-5 text-[#E8E8E0] top-0 z-30">
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
        {/* Explore TV & Home */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">Explore TV & Home</p>
          <ul className="text-xl sm:text-2xl font-bold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Explore TV & Home</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple TV 4K</Link></li>
            <li><Link to="#" className="whitespace-nowrap">HomePod</Link></li>
            <li><Link to="#" className="whitespace-nowrap">HomePod mini</Link></li>
          </ul>
        </div>

        {/* Shop TV & Home */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">Shop TV & Home</p>
          <ul className="text-sm font-semibold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Shop Apple TV 4K</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Shop HomePod</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Shop HomePod mini</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Shop Siri Remote</Link></li>
            <li><Link to="#" className="whitespace-nowrap">TV & Home Accessories</Link></li>
          </ul>
        </div>

        {/* More from TV & Home */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">More from TV & Home</p>
          <ul className="text-sm font-semibold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Apple TV Support</Link></li>
            <li><Link to="#" className="whitespace-nowrap">HomePod Support</Link></li>
            <li><Link to="#" className="whitespace-nowrap">AppleCare for Apple TV</Link></li>
            <li><Link to="#" className="whitespace-nowrap">AppleCare for HomePod</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple TV app</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple TV+</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Home app</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple Music</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Siri</Link></li>
            <li><Link to="#" className="whitespace-nowrap">AirPlay</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Side_Tv;
