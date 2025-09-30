import IPhone17Img1 from "../assets/images/IPhone17Pro-mobile.png"
import IPhone17Img2 from "../assets/images/IPhone17Pro-desktop.png"
import IPhoneAirImg1 from "../assets/images/iPhoneAir-mobile.png"
import IPhoneAirImg2 from "../assets/images/iPhoneAir-desktop.png"
import Card from "./Card"
const heros=[{
    flip:false,
    bgColor:"black",
    textColor:"white",
    title:"iPhone 17 Pro",
    subtitle1:"All out Pro",
    subtitle2:"",
    img1:IPhone17Img1,
    alt1:"iPhone17-img1",
    img1MinWidth:"250px",
    img1MaxWidth:"75%",
    img2:IPhone17Img2,
    alt2:"iPhone17-img2",
    img2Width:"68%",
   
  },
 {
   flip:false,
   bgColor:"#F5F5F7",
   textColor:"black",
   title:"iPhone Air",
   subtitle1:"The thinnest iPhone",
   subtitle2:"With the power of pro inside",
   img1:IPhoneAirImg1,
   alt1:"iPhoneAir-img1",
   img1MinWidth:"250px",
   img1MaxWidth:"70%",
   img2:IPhoneAirImg2,
   alt2:"iPhoneAir-img2",
   img2Width:"100%",
   
 },
]
function Hero(){
    return(
        <div className="mb-3 space-y-3">
        {
           heros.map((item,index)=><Card key={index} props={item}></Card>) 
        }
       </div>
    )
     
    
}
export default Hero