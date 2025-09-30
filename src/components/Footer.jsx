import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function Footer() {
    // You have eleven useState variables, so let's use them for all sections
    const[dropDown1,setDropDown1]=useState(false) // Shop and Learn
    const[dropDown2,setDropDown2]=useState(false) // Apple Wallet
    const[dropDown3,setDropDown3]=useState(false) // Account
    const[dropDown4,setDropDown4]=useState(false) // Entertainment
    const[dropDown5,setDropDown5]=useState(false) // Apple Store
    const[dropDown6,setDropDown6]=useState(false) // For Business
    const[dropDown7,setDropDown7]=useState(false) // For Education
    const[dropDown8,setDropDown8]=useState(false) // For Healthcare
    const[dropDown9,setDropDown9]=useState(false) // For Government
    const[dropDown10,setDropDown10]=useState(false) // Apple Values
    const[dropDown11,setDropDown11]=useState(false) // About Apple

  return (
    <div className="bg-[#F5F5F7] text-[#7A7A7B] text-xs mt-3 py-3 px-5 sm:px-8 md:px-16 lg:px-24 xl:px-52">
      <div className=" flex flex-col gap-3">
        <p>
          *Apple Education Pricing is available to current and newly accepted college students and their parents, as well as teachers and staff at all levels. For more information, visit{" "}
          <Link className="underline underline-offset-1 text-[#444445]">
            apple.com/in-edu/store
          </Link>
          .
        </p>
        <p>
          ◊Qualified Purchasers can receive Promotion Savings when they purchase an eligible Mac or iPad with their choice of a Promotion Product at a Qualifying Location. Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product can be obtained per eligible Mac or iPad per Qualified Purchaser. The offer is subject to availability, while supplies last. View full terms and conditions of offer{" "}
          <Link className="underline underline-offset-1 text-[#444445]">
            here
          </Link>
          .
        </p>
        <p>‡Includes instant cashback and No Cost EMI.</p>
        <p>
          No Cost EMI is available with the purchase of an{" "}
          <Link className="underline underline-offset-1 text-[#444445]">
            eligible product
          </Link>{" "}
          made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. The 9- and 12-month tenures of No Cost EMI are available until 23 October 2025. Eligible AirPods, HomePod, Beats and the iPhone Air MagSafe Battery are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice.{" "}
          <Link className="underline underline-offset-1 text-[#444445]">
            Terms apply.
          </Link>
          .
        </p>
        <p>
          Instant cashback is available with the purchase of an{" "}
          <Link className="underline underline-offset-1 text-[#444445]">
            eligible product
          </Link>{" "}
          with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001 applies.{" "}
          <Link className="underline underline-offset-1 text-[#444445]">
            Click here
          </Link>{" "}
          to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice.{" "}
          <Link className="underline underline-offset-1 text-[#444445]">
            Additional terms apply
          </Link>
          . Instant cashback is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
        </p>
        <p>
          1. Testing conducted by Apple in July 2025 using AirPods Pro 3 paired with iPhone 16 with pre-release AirPods firmware and iOS 26. Noise reduction was tested in accordance with IEC 60268-24. Comparison made against the best-selling wireless in-ear headphones commercially available at the time of testing. Performance depends on device settings, environment and many other factors.
        </p>
        <p>A subscription is required for Apple TV+.</p>
        <p>
          Features are subject to change. Some features, applications and services may not be available in all regions or all languages.
        </p>
      </div>
      
      {/* GLOBAL DIVIDER (Non-responsive one) */}
      <div className="border-t border-t-[#7A7A7B] mt-4"></div>

      <div className="flex flex-col gap-2 leading-[25px] md-lg:flex-row md-lg:mt-2  md-lg:justify-between">
        
        {/* SHOP AND LEARN & APPLE WALLET */}
        <div className="flex flex-col gap-2 mt-2 md-lg:mt-0">
          
          {/* Shop and Learn */}
          <div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#444445] font-semibold">Shop and Learn</p>
                <IoIosArrowDown className="md-lg:hidden text-[17px] cursor-pointer" onClick={()=>setDropDown1(!dropDown1)}/>
            </div>
            {/* CORRECTED: Using conditional Tailwind classes instead of inline style */}
            <div className={`${dropDown1?"block":"hidden"} md-lg:block`}>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Store</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Mac</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">iPad</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">iPhone</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Watch</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">AirPods</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">TV &amp; Home</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">AirTag</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Accessories</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Gift Cards</Link>
            </div>
            
          </div>

          {/* MOBILE DIVIDER 1 */}
          <div className="border-t border-t-[#7A7A7B] md-lg:hidden"></div>
          
          {/* Apple Wallet */}
          <div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#444445] font-semibold">Apple Wallet</p>
                <IoIosArrowDown className="md-lg:hidden text-[17px] cursor-pointer" onClick={()=>setDropDown2(!dropDown2)}/>
            </div>
            {/* CORRECTED: Using conditional Tailwind classes instead of inline style */}
            <div className={`${dropDown2?"block":"hidden"} md-lg:block`}>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Wallet</Link>
            </div>
          </div>
          {/* MOBILE DIVIDER 2 */}
          <div className="border-t border-t-[#7A7A7B] md-lg:hidden"></div>        
        </div>
        
        {/* ACCOUNT & ENTERTAINMENT */}
        <div className="flex flex-col gap-2">
          
          {/* Account */}
          <div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#444445] font-semibold">Account</p>
                <IoIosArrowDown className="md-lg:hidden text-[17px] cursor-pointer" onClick={()=>setDropDown3(!dropDown3)}/>
            </div>
            {/* CORRECTED: Using conditional Tailwind classes instead of inline style */}
            <div className={`${dropDown3?"block":"hidden"} md-lg:block`}>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Manage Your Apple Account</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple Store Account</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">iCloud.com</Link>
            </div>
          </div>

          {/* MOBILE DIVIDER 3 */}
          <div className="border-t border-t-[#7A7A7B] md-lg:hidden"></div>

          {/* Entertainment */}
          <div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#444445] font-semibold">Entertainment</p>
                <IoIosArrowDown className="md-lg:hidden text-[17px] cursor-pointer" onClick={()=>setDropDown4(!dropDown4)}/>
            </div>
            {/* CORRECTED: Using conditional Tailwind classes instead of inline style */}
            <div className={`${dropDown4?"block":"hidden"} md-lg:block`}>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple One</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple TV+</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple Music</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple Arcade</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple Podcasts</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple Books</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">App Store</Link>
            </div>
          </div>

          {/* MOBILE DIVIDER 4 */}
          <div className="border-t border-t-[#7A7A7B] md-lg:hidden"></div>
        </div>
        
        {/* APPLE STORE */}
        <div className="flex flex-col gap-2">
          
          {/* Apple Store */}
          <div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#444445] font-semibold">Apple Store</p>
                <IoIosArrowDown className="md-lg:hidden text-[17px] cursor-pointer" onClick={()=>setDropDown5(!dropDown5)}/>
            </div>
            {/* CORRECTED: Using conditional Tailwind classes instead of inline style */}
            <div className={`${dropDown5?"block":"hidden"} md-lg:block`}>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Find a Store</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Genius Bar</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Today at Apple</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Group Reservations</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple Camp</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple Trade In</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Ways to Buy</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Recycling Programme</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Order Status</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Shopping Help</Link>
            </div>
          </div>

          {/* MOBILE DIVIDER 5 */}
          <div className="border-t border-t-[#7A7A7B] md-lg:hidden"></div>
        </div>
        
        {/* FOR BUSINESS, FOR EDUCATION, FOR HEALTHCARE, FOR GOVERNMENT */}
        <div className="flex flex-col gap-2">
          
          {/* For Business */}
          <div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#444445] font-semibold">For Business</p>
                <IoIosArrowDown className="md-lg:hidden text-[17px] cursor-pointer" onClick={()=>setDropDown6(!dropDown6)}/>
            </div>
            {/* CORRECTED: Using conditional Tailwind classes instead of inline style */}
            <div className={`${dropDown6?"block":"hidden"} md-lg:block`}>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple and Business</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Shop for Business</Link>
            </div>
          </div>

          {/* MOBILE DIVIDER 6 */}
          <div className="border-t border-t-[#7A7A7B] md-lg:hidden"></div>

          {/* For Education */}
          <div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#444445] font-semibold">For Education</p>
                <IoIosArrowDown className="md-lg:hidden text-[17px] cursor-pointer" onClick={()=>setDropDown7(!dropDown7)}/>
            </div>
            {/* CORRECTED: Using conditional Tailwind classes instead of inline style */}
            <div className={`${dropDown7?"block":"hidden"} md-lg:block`}>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple and Education</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Shop for Education</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Shop for University</Link>
            </div>
          </div>

          {/* MOBILE DIVIDER 7 */}
          <div className="border-t border-t-[#7A7A7B] md-lg:hidden"></div>
          
          {/* For Healthcare */}
          <div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#444445] font-semibold">For Healthcare</p>
                <IoIosArrowDown className="md-lg:hidden text-[17px] cursor-pointer" onClick={()=>setDropDown8(!dropDown8)}/>
            </div>
            {/* CORRECTED: Using conditional Tailwind classes instead of inline style */}
            <div className={`${dropDown8?"block":"hidden"} md-lg:block`}>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple and Healthcare</Link>
            </div>
          </div>

          {/* MOBILE DIVIDER 8 */}
          <div className="border-t border-t-[#7A7A7B] md-lg:hidden"></div>

          {/* For Government */}
          <div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#444445] font-semibold">For Government</p>
                <IoIosArrowDown className="md-lg:hidden text-[17px] cursor-pointer" onClick={()=>setDropDown9(!dropDown9)}/>
            </div>
            {/* CORRECTED: Using conditional Tailwind classes instead of inline style */}
            <div className={`${dropDown9?"block":"hidden"} md-lg:block`}>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple and Government</Link>
            </div>
          </div>

          {/* MOBILE DIVIDER 9 */}
          <div className="border-t border-t-[#7A7A7B] md-lg:hidden"></div>
        </div>
        
        {/* APPLE VALUES & ABOUT APPLE */}
        <div className="flex flex-col gap-2">
          
          {/* Apple Values */}
          <div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#444445] font-semibold">Apple Values</p>
                <IoIosArrowDown className="md-lg:hidden text-[17px] cursor-pointer" onClick={()=>setDropDown10(!dropDown10)}/>
            </div>
            {/* CORRECTED: Using conditional Tailwind classes instead of inline style */}
            <div className={`${dropDown10?"block":"hidden"} md-lg:block`}>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Accessibility</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Education</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Environment</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Privacy</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Supply Chain Innovation</Link>
            </div>
          </div>

          {/* MOBILE DIVIDER 10 */}
          <div className="border-t border-t-[#7A7A7B] md-lg:hidden"></div>

          {/* About Apple */}
          <div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[#444445] font-semibold">About Apple</p>
                <IoIosArrowDown className="md-lg:hidden text-[17px] cursor-pointer" onClick={()=>setDropDown11(!dropDown11)}/>
            </div>
            {/* This one was already correct! */}
            <div className={`${dropDown11?"block":"hidden"} md-lg:block`}>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Newsroom</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Apple Leadership</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Career Opportunities</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Investors</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Ethics &amp; Compliance</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Events</Link>
              <Link className="hover:underline hover:underline-offset-1 block" to="#">Contact Apple</Link>
            </div>
          </div>

          {/* MOBILE DIVIDER 11 */}
          <div className="border-t border-t-[#7A7A7B] md-lg:hidden"></div>
        </div>
      </div>
      <div className="mt-6">
        <p>More ways to shop: <Link className="text-[#0267CC] underline underline-offset-1">Find an Apple Store</Link> or <Link className="text-[#0267CC] underline underline-offset-1">other retailer</Link> near you. <span className="whitespace-nowrap">Or call <Link className="text-[#0267CC] underline underline-offset-1">000800 040 1966</Link>.</span></p>
      </div>
      <div className="border-t border-t-[#7A7A7B] mt-4 hidden md-lg:block"></div>
      <div className="flex flex-col gap-4 md-lg:flex-row md-lg:justify-between mt-4">
        <div className="order-2 md-lg:order-1 flex flex-col gap-1 lg:flex-row lg:gap-10">
            <p>Copyright &copy; 2025 Apple Inc. All rights reserved.</p>
            <p className="text-[#444445]">Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map</p>
        </div>
        <p className="order-1 md-lg:order-2 text-[#444445]">India</p>
      </div>
    </div>
  );
}
export default Footer;