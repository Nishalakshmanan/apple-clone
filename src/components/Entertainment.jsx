import { Link } from "react-router-dom";

function Entertainment({ dropDown }) {
  return (
    dropDown !== "entertainment"?"":
    <div className="bg-[#1D1D1F] w-full flex py-5 justify-center gap-20 lg:gap-28 text-[#efe9e9] fixed top-10 z-10">
      {/* Explore Entertainment */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Explore Entertainment</p>
        <ul className="text-2xl font-bold space-y-1">
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
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Support</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Apple TV+ Support</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Music Support</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Entertainment;