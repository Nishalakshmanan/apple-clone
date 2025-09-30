import { Link } from "react-router-dom";

function Mac({ dropDown }) {
  return (
    dropDown !== "mac"?"":
    <div className="bg-[#1D1D1F] w-full flex py-5 justify-center gap-20 lg:gap-28 text-[#efe9e9] fixed top-10 z-10">
      {/* Explore Mac */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Explore Mac</p>
        <ul className="text-2xl font-bold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Explore All Mac</Link></li>
          <li><Link to="#" className="whitespace-nowrap">MacBook Air</Link></li>
          <li><Link to="#" className="whitespace-nowrap">MacBook Pro</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iMac</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Mac mini</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Mac Studio</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Mac Pro</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Displays</Link></li>
          <li><Link to="#" className="text-xs font-normal whitespace-nowrap">Compare Mac</Link></li>
          <li><Link to="#" className="text-xs font-normal whitespace-nowrap">Switch from PC to Mac</Link></li>
        </ul>
      </div>

      {/* Shop Mac */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">Shop Mac</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Shop Mac</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Mac Accessories</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Ways to Buy</Link></li>
          <li><Link to="#" className="whitespace-nowrap">College Student Offer</Link></li>
        </ul>
      </div>

      {/* More from Mac */}
      <div>
        <p className="text-[#a29a9a] text-xs mb-2.5 whitespace-nowrap">More from Mac</p>
        <ul className="text-xs font-semibold space-y-1">
          <li><Link to="#" className="whitespace-nowrap">Mac Support</Link></li>
          <li><Link to="#" className="whitespace-nowrap">AppleCare</Link></li>
          <li><Link to="#" className="whitespace-nowrap">macOS Tahoe</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apple Intelligence</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Apps by Apple</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Continuity</Link></li>
          <li><Link to="#" className="whitespace-nowrap">iCloud+</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Mac for Business</Link></li>
          <li><Link to="#" className="whitespace-nowrap">Education</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Mac;