import { Link } from "react-router-dom";

function Tv({ dropDown }) {
  return (
    dropDown !== "tv"?"":
    <div className="bg-[#1D1D1F] w-full flex py-5 justify-center gap-20 lg:gap-28 text-[#efe9e9] fixed top-10 z-10">
      {/* Explore TV & Home */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Explore TV & Home</p>
        <ul className="text-2xl font-bold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Explore TV & Home</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple TV 4K</Link></li>
          <li><Link to="#" className="whitespace-nowrap">HomePod</Link></li>
          <li><Link to="#" className="whitespace-nowrap">HomePod mini</Link></li>
        </ul>
      </div>

      {/* Shop TV & Home */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Shop TV & Home</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Shop Apple TV 4K</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Shop HomePod</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Shop HomePod mini</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Shop Siri Remote</Link></li>
          <li><Link to="#" className="whitespace-nowrap">TV & Home Accessories</Link></li>
        </ul>
      </div>

      {/* More from TV & Home */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">More from TV & Home</p>
        <ul className="text-xs font-semibold space-y-1">
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
  );
}

export default Tv;