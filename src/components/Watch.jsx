import { Link } from "react-router-dom";

function Watch({ dropDown }) {
  return (
    dropDown !== "watch"?"":
    <div className="bg-[#1D1D1F] w-full flex py-5 justify-center  gap-20 lg:gap-28 text-[#efe9e9] fixed top-10 z-10">
      {/* Explore Watch */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Explore Watch</p>
        <ul className="text-2xl font-bold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Explore All Apple Watch</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Watch Series 11</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Watch SE 3</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Watch Ultra 3</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Watch Nike</Link></li>
          <li><Link to="#" className="text-xs font-normal whitespace-nowrap">Compare Watch</Link></li>
          <li><Link to="#" className="text-xs font-normal whitespace-nowrap">Why Apple Watch</Link></li>
        </ul>
      </div>

      {/* Shop Watch */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Shop Watch</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Shop Apple Watch</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Watch Straps</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Watch Accessories</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Ways to Buy</Link></li>
        </ul>
      </div>

      {/* More from Watch */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">More from Watch</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Apple Watch Support</Link></li>
          <li><Link to="#" className="whitespace-nowrap">AppleCare</Link></li>
          <li><Link to="#" className="whitespace-nowrap">watchOS 26</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Watch For Your Kids</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apps by Apple</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Watch;