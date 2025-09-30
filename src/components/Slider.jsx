import { useEffect, useState,useRef, use } from "react";
import Slider1 from "../assets/images/slider1.jpg";
import Slider2 from "../assets/images/slider2.jpg";
import Slider3 from "../assets/images/slider3.jpg";
import Slider4 from "../assets/images/slider4.jpg";
import Slider5 from "../assets/images/slider5.jpg";
import Slider6 from "../assets/images/slider6.png";
import Slider7 from "../assets/images/slider7.jpg";
import Slider8 from "../assets/images/slider8.png";
import Slider_1 from "../assets/images/slider_1.jpg";
import Slider_2 from "../assets/images/slider_2.jpg";
import Slider_3 from "../assets/images/slider_3.jpg";
import Slider_4 from "../assets/images/slider_4.jpg";
import Slider_5 from "../assets/images/slider_5.jpg";
import Slider_6 from "../assets/images/slider_6.jpg";
import Slider_7 from "../assets/images/slider_7.jpg";
import Slider_8 from "../assets/images/slider_8.jpg";

const slider = [ 
  { d_img: Slider1,
    m_img: Slider_1,
    title:"Thriller",
    desc1:"Winner of 8 Emmy",
    reg:"®",
    desc2:"Awards",
   },
  { d_img: Slider2,
    m_img: Slider_2,
    title:"Truth",
    desc1:"Pull back the curtain on early morning TV",  
   },
  { d_img: Slider3,
    m_img: Slider_3,
    title:"Action",
    desc1:"It's only a legend until you discover it",
  },
  { d_img: Slider4,
    m_img: Slider_4,
    title:"Sci-Fi",
    desc1:"To live,you need something to die for",
  },
  { d_img: Slider5,
    m_img: Slider_5,
    title:"Comedy",
    desc1:"Getting it together.Together",
   },
  { d_img: Slider6,
    m_img: Slider_6,
    title:"Thriller",
    desc1:"The world's most dangerous secret lies between them",
   },
  { d_img: Slider7,
    m_img: Slider_7,
    title:"Drama",
    desc1:"Live you best lie",
   },
  { d_img: Slider8,
    m_img: Slider_8,
    title:"Thriller",
    desc1:"Emmy",
    reg:"®",
    desc2:"Award Winner",
   },
];

function Slider() {
  const [count, setcount] = useState(0);
  const[width,setWidth]=useState(window.innerWidth)
  function handleResize(){
    setWidth(window.innerWidth)
  }
  useEffect(()=>{
   window.addEventListener("resize",handleResize)
   return ()=>{
     window.removeEventListener("resize",handleResize)
   }
  },[])
  var timerId=null;
  const slidelen=slider.length;
  const prevIndex = (count - 1 + slidelen) % slidelen;
  const nextIndex = (count + 1) % slidelen;
  function startAutoSlide(){
    stopAutoSlide()
     timerId=setInterval(()=>{
        setcount((c) => (c + 1) % slidelen)
    },4000)
  }
  function stopAutoSlide(){
     clearInterval( timerId)
     timerId=null
  }
  useEffect(()=>{
    startAutoSlide()
    return ()=>{
      stopAutoSlide()
    }
  },[count])
  return (
    <div className="slidercontainer">
      <div className="sliderimgs" style={{transition:"all",transitionDuration:"1s"}}>
        <div
          style={{
            backgroundImage:(width>735)?`url(${slider[prevIndex].d_img})`:`url(${slider[prevIndex].m_img})`,
            backgroundPosition: "right",
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundBlendMode: "darken"
          }}
          className="img1"
        ></div>
        <div className="img2">
          <img src={width>735?slider[count].d_img:slider[count].m_img} alt="img" />
          <div className="overlay w-full flex flex-col gap-2 items-center justify-center md:flex-row md:gap-3.5 md:justify-start md:w-[82%]" key={count}>
            <button className="bg-white text-black text-sm lg:text-base font-medium py-1.5 px-3 sm:py-2 lg:py-2.5 lg:px-6 rounded-full whitespace-nowrap order-2 md:order-1">Stream now</button>
            {(width>735)?(<h1 className="text-base lg:text-lg order-2"><strong className="font-extrabold">{slider[count].title}.</strong>&nbsp;{slider[count].desc1}<span className="size-4">{slider[count].reg}</span>&nbsp;{slider[count].desc2}</h1>)
            :
            (<div className="order-1 text-center">
            <p className="font-extrabold text-sm xs:text-base">{slider[count].title}</p>
            <p className="text-sm xs:text-base">{slider[count].desc1}<span className="size-4">{slider[count].reg}</span>&nbsp;{slider[count].desc2}</p>
            </div>)
            }
            
          </div>
         
        </div> 
        <div 
          style={{
            backgroundImage:(width>735)?`url(${slider[prevIndex].d_img})`:`url(${slider[nextIndex].m_img})`,
            backgroundPosition: "left",
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundBlendMode: "darken",
          }}
          className="img3"
        ></div>
      </div>
      <div className="sliderarrows">  
        <i className="fa-solid fa-chevron-left" onClick={()=>setcount((c) => (c - 1 + slidelen) % slidelen)}></i>
        <i className="fa-solid fa-chevron-right" onClick={()=>setcount((c) => (c + 1) % slidelen)}></i>
      </div>
      <div className="dots">{
        slider.map((item,i)=><div style={{backgroundColor:i===count?"black":"grey",borderRadius:"999px"}} onClick={()=>setcount(i)} ></div>)
        }
      </div>
    </div>
  );
}
export default Slider;