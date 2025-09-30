import IPhone17 from "../assets/images/iPhone17.png"
import  AirPodPro3 from "../assets/images/airpodspro3.png"
import WatchSeries11 from "../assets/images/watchseries11.png"
import WatchSe3 from "../assets/images/watchse3.png"
import WatchUltra3 from "../assets/images/watchultra3.png"
import TradeIn from "../assets/images/tradein.png"
import Card from "./Card"
function Products(){
    const products=[{
        flip:false,
        bgColor:"#F5F5F7",
        textColor:"black",
        title:"iPhone17 ",
        titleadd:"",
        subtitle1:"Magichromatic",
        subtitle2:"",
        img1:IPhone17,
        alt1:"IPhone17",
        img1MinWidth:"300px",
        img1MaxWidth:"75%",
      },
     {
       flip:false,
       bgColor:"#F5F5F7",
       textColor:"black",
       title:"AirPods Pro 3",
       titleadd:"",
       subtitle1:"The world's best in-ear",
       subtitle2:"Active Noise Cancellation",
       img1:AirPodPro3,
       alt1:"AirPodPro3",
       img1MinWidth:"250px",
       img1MaxWidth:"60%",
     },
     {
       flip:false,
       bgColor:"#F5F5F7",
       textColor:"black",
       title:"WATCH",
       titleadd:"SERIES 11",
       subtitle1:"The world's best in-ear",
       subtitle2:"The ultimate watch for a healthy life",
       img1:WatchSeries11,
       alt1:"WatchSeries11",
       img1MinWidth:"250px",
       img1MaxWidth:"100%",
     },
    {
       flip:true,
       bgColor:"#F5F5F7",
       textColor:"black",
       title:"WATCH",
       titleadd:"SE 3",
       subtitle1:"Walk it. Talk it. Track it. Love it",
       subtitle2:"",
       img1:WatchSe3,
       alt1:"WatchSe3",
       img1MinWidth:"250px",
       img1MaxWidth:"50%",
     },
    {
       flip:false,
       bgColor:"black",
       textColor:"white",
       title:"WATCH",
       titleadd:"ULTRA 3",
       subtitle1:"Personal beast",
       subtitle2:"",
       img1:WatchUltra3,
       alt1:"WatchUltra3",
       img1MinWidth:"250px",
       img1MaxWidth:"50%",
     },
    {
       flip:false,
       bgColor:"#DDEEF6",
       textColor:"black",
       title:"Trade In",
       titleadd:"",
       subtitle1:"Upgrade and save",
       subtitle2:"It's that easy",
       img1:TradeIn,
       alt1:"TradeIn",
       img1MinWidth:"250px",
       img1MaxWidth:"65%",
     }]
  
    return(
        <div className="grid column-1 gap-3 md:grid-cols-2 auto-rows-fr">
        {
           products.map((item,index)=><Card key={index} props={item}></Card>) 
        }
       </div>
    )
     
    
}
export default Products