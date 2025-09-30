import { Link } from "react-router-dom";

function Store({ dropDown }) {
  return dropDown !== "store" ? (
    ""
  ) : (
    <div className="bg-[#1D1D1F] w-full h-fit flex py-5 justify-center gap-20 lg:gap-28 text-[#efe9e9] fixed top-10 z-20">
      {/* Shop Section */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Shop</p>
        <ul className="text-2xl font-bold space-y-1">
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
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Quick Links</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Find a Store</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Order Status</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Ways to Buy</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Personal Setup</Link></li>
          <li><Link to="#" className="whitespace-nowrap">College Student Offer</Link></li>
        </ul>
      </div>

      {/* Shop Special Stores Section */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Shop Special Stores</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Education</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Business</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Store;