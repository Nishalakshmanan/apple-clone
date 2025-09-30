import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function Side_Store({ sidebar2, setSidebar2, setSidebarOpen }) {
  return sidebar2 !== "sidestore" ? (
    ""
  ) : (
    <div className="bg-[#1D1D1F] w-full h-full flex flex-col justify-start gap-5 pb-4 text-[#E8E8E0] fixed top-0 z-40 overflow-y-scroll">
      {/* Header Section */}
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

      {/* Content Section */}
      <div className="px-10 xs:px-14 flex flex-col gap-10">
        {/* Shop the Latest */}
        <div>
          <ul className="text-xl sm:text-2xl font-bold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Shop the Latest</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Mac</Link></li>
            <li><Link to="#" className="whitespace-nowrap">iPad</Link></li>
            <li><Link to="#" className="whitespace-nowrap">iPhone</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Apple Watch</Link></li>
            <li><Link to="#" className="whitespace-nowrap">AirPods</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Accessories</Link></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <p className="text-[#a29a9a] mb-2.5 whitespace-nowrap">Quick Links</p>
          <ul className="font-semibold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Find a Store</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Order Status</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Ways to Buy</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Personal Setup</Link></li>
            <li><Link to="#" className="whitespace-nowrap">College Student Offer</Link></li>
          </ul>
        </div>

        {/* Shop Special Stores Section */}
        <div>
          <p className="text-[#a29a9a] mb-2.5 whitespace-nowrap">Shop Special Stores</p>
          <ul className="font-semibold space-y-1">
            <li><Link to="#" className="whitespace-nowrap">Education</Link></li>
            <li><Link to="#" className="whitespace-nowrap">Business</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Side_Store;
