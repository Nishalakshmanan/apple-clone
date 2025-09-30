import { Link } from "react-router-dom";

function Support({ dropDown }) {
  return (
    dropDown !== "support"?"":
    <div className="bg-[#1D1D1F] w-full flex py-5 justify-center gap-20 lg:gap-28 text-[#efe9e9] fixed top-10 z-10">
      {/* Explore Support */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Explore Support</p>
        <ul className="text-2xl font-bold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Explore Support</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPhone</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Mac</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPad</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Watch</Link></li>
          <li><Link to="#" className="whitespace-nowrap">AirPods</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Music</Link></li>
          <li><Link to="#" className="whitespace-nowrap">TV</Link></li>
        </ul>
      </div>

      {/* Get Help */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Get Help</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Community</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Check Coverage</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Genius Bar</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Repair</Link></li>
        </ul>
      </div>

      {/* Helpful Topics */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Helpful Topics</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Get AppleCare</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Account and Password</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Billing & Subscriptions</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Accessibility</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Support;