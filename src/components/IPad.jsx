import { Link } from "react-router-dom";

function IPad({ dropDown }) {
  return (
    dropDown !== "ipad"?"":
    <div className="bg-[#1D1D1F] w-full flex py-5 justify-center gap-20 lg:gap-28 text-[#efe9e9] fixed top-10 z-10">
      {/* Explore iPad */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Explore iPad</p>
        <ul className="text-2xl font-bold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Explore All iPad</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPad Pro</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPad Air</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPad</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPad mini</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Pencil</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Keyboards</Link></li>
          <li><Link to="#" className="text-xs font-normal whitespace-nowrap">Compare iPad</Link></li>
          <li><Link to="#" className="text-xs font-normal whitespace-nowrap">Why iPad</Link></li>
        </ul>
      </div>

      {/* Shop iPad */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Shop iPad</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Shop iPad</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPad Accessories</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Ways to Buy</Link></li>
          <li><Link to="#" className="whitespace-nowrap">College Student Offer</Link></li>
        </ul>
      </div>

      {/* More from iPad */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">More from iPad</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">iPad Support</Link></li>
          <li><Link to="#" className="whitespace-nowrap">AppleCare</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPadOS 26</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Intelligence</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apps by Apple</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iCloud+</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Education</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default IPad;