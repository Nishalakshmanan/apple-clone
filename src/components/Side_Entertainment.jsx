import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function Side_Entertainment({ sidebar2, setSidebar2, setSidebarOpen }) {
  return sidebar2 !== "sideentertainment" ? (
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
        {/* Explore Entertainment */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">Explore Entertainment</p>
          <ul className="text-xl sm:text-2xl font-bold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Explore Entertainment</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple One</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple TV+</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple Music</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple Arcade</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple Podcasts</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple Books</Link></li>
            <li><Link to="#" className="whitespace-nowrap">App Store</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">Support</p>
          <ul className="text-sm font-semibold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Apple TV+ Support</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple Music Support</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Side_Entertainment;
