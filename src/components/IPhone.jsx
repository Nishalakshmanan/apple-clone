import { Link } from "react-router-dom";

function IPhone({ dropDown }) {
  return (
    dropDown !== "iphone"?"":
    <div className="bg-[#1D1D1F] w-full flex py-5 justify-center  gap-20 lg:gap-28 text-[#efe9e9] fixed top-10 z-10">
      {/* Explore iPhone */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Explore iPhone</p>
        <ul className="text-2xl font-bold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Explore All iPhone</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPhone 17 Pro</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPhone Air</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPhone 17</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPhone 16</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPhone 16e</Link></li>
          <li><Link to="#" className="text-xs font-normal whitespace-nowrap">Compare iPhone</Link></li>
          <li><Link to="#" className="text-xs font-normal whitespace-nowrap">Switch from Android</Link></li>
        </ul>
      </div>

      {/* Shop iPhone */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Shop iPhone</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Shop iPhone</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPhone Accessories</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Trade In</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Ways to Buy</Link></li>
        </ul>
      </div>

      {/* More from iPhone */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">More from iPhone</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">iPhone Support</Link></li>
          <li><Link to="#" className="whitespace-nowrap">AppleCare</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iOS 26</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Intelligence</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apps by Apple</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iPhone Privacy</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iCloud+</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Wallet</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Siri</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default IPhone;