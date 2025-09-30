import { Link } from "react-router-dom";

function Accessories({ dropDown }) {
  return (
    dropDown !== "accessories"?"":
    <div className="bg-[#1D1D1F] w-full flex py-5 justify-center gap-20 lg:gap-28 text-[#efe9e9] fixed top-10 z-10">
      {/* Shop Accessories */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Shop Accessories</p>
        <ul className="text-2xl font-bold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Shop All Accessories</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Mac</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPad</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPhone</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Watch</Link></li>
          <li><Link to="#" className="whitespace-nowrap">AirPods</Link></li>
          <li><Link to="#" className="whitespace-nowrap">TV & Home</Link></li>
        </ul>
      </div>

      {/* Explore Accessories */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Explore Accessories</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Made by Apple</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Beats by Dr. Dre</Link></li>
          <li><Link to="#" className="whitespace-nowrap">AirTag</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Accessories;