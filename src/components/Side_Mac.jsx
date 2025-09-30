import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function Side_Mac({ sidebar2, setSidebar2, setSidebarOpen }) {
  return sidebar2 !== "sidemac" ? (
    ""
  ) : (
    <div className="bg-[#1D1D1F] w-full h-full flex flex-col justify-start gap-5 pb-4 text-[#E8E8E0] fixed top-0 left-0 z-40 overflow-y-scroll">
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
      <div className="px-10 xs:px-14 flex flex-col gap-10">
        {/* Explore Mac */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">Explore Mac</p>
          <ul className="text-xl sm:text-2xl font-bold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Explore All Mac</Link></li>
            <li><Link to="#" className="whitespace-nowrap">MacBook Air</Link></li>
            <li><Link to="#" className="whitespace-nowrap">MacBook Pro</Link></li>
            <li><Link to="#" className="whitespace-nowrap">iMac</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Mac mini</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Mac Studio</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Mac Pro</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Displays</Link></li>
            <li><Link to="#" className="text-sm font-normal whitespace-nowrap">Compare Mac</Link></li>
            <li><Link to="#" className="text-sm font-normal whitespace-nowrap">Switch from PC to Mac</Link></li>
          </ul>
        </div>

        {/* Shop Mac */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">Shop Mac</p>
          <ul className="text-sm font-semibold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Shop Mac</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Mac Accessories</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Ways to Buy</Link></li>
            <li><Link to="#" className="whitespace-nowrap">College Student Offer</Link></li>
          </ul>
        </div>

        {/* More from Mac */}
        <div>
          <p className="text-[#a29a9a] text-sm mb-2.5 whitespace-nowrap">More from Mac</p>
          <ul className="text-sm font-semibold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Mac Support</Link></li>
            <li><Link to="#" className="whitespace-nowrap">AppleCare</Link></li>
            <li><Link to="#" className="whitespace-nowrap">macOS Tahoe</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple Intelligence</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apps by Apple</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Continuity</Link></li>
            <li><Link to="#" className="whitespace-nowrap">iCloud+</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Mac for Business</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Education</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Side_Mac;
