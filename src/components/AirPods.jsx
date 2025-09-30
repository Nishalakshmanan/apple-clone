import { Link } from "react-router-dom";

function AirPods({ dropDown }) {
  return (
    dropDown !== "airpods"?"":
    <div className="bg-[#1D1D1F] w-full flex py-5 justify-center gap-20 lg:gap-28 text-[#efe9e9] fixed top-10 z-10">
      {/* Explore AirPods */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Explore AirPods</p>
        <ul className="text-2xl font-bold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Explore All AirPods</Link></li>
          <li><Link to="#" className="whitespace-nowrap">AirPods 4</Link></li>
          <li><Link to="#" className="whitespace-nowrap">AirPods Pro 3</Link></li>
          <li><Link to="#" className="whitespace-nowrap">AirPods Max</Link></li>
          <li><Link to="#" className="text-xs font-normal whitespace-nowrap">Compare AirPods</Link></li>
        </ul>
      </div>

      {/* Shop AirPods */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Shop AirPods</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Shop AirPods</Link></li>
          <li><Link to="#" className="whitespace-nowrap">AirPods Accessories</Link></li>
        </ul>
      </div>

      {/* More from AirPods */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">More from AirPods</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">AirPods Support</Link></li>
          <li><Link to="#" className="whitespace-nowrap">AppleCare</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Music</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default AirPods;