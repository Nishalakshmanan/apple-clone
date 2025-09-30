function Card({props}){
    //735px img change
    return (<div>
       
        <div  style={{backgroundColor:props.bgColor,color:props.textColor}}  className="w-full h-full pt-6 md:pt-10 flex flex-col gap-4 md:gap-10 items-center">

            <div className={`flex flex-col items-center gap-1 md:gap-2 ${props.flip?"order-2":"order-1"}`} >
                {props.img2?(
                    <p className="text-3xl md:text-5xl font-bold">{props.title}</p>
                  ):(<div className="flex flex-row text-3xl gap-2">
                    <p className="font-bold">{props.title}</p>
                    <p className="font-light">{props.titleadd}</p>
                   </div>)}
                    
                {props.img2?(
                    <div className="text-center">
                     <p className="md:text-2xl font-medium">{props.subtitle1}</p>
                     <p className="md:text-2xl font-medium">{props.subtitle2}</p>
                   </div>
                  ):
                    <div className="text-center">
                     <p className="font-medium">{props.subtitle1}</p>
                     <p className="font-medium">{props.subtitle2}</p>
                   </div>
                }
                
               
                <div className="flex mt-2 gap-4">
                   <button className="bg-[#328CE7] text-white text-sm xs:text-normal py-1 px-2  xs:py-1 xs:px-3 md:py-2 md:px-6 rounded-full">Learn more</button>
                   <button className=" text-[#328CE7] text-sm xs:text-normal border-2 border-[#328CE7] py-1 px-3 xs:py-1 xs:px-4 md:py-2 md:px-6 rounded-full">Buy</button>
                </div>
            </div>
           {/*img2 for desktop screen*/}
           {/*img1 for Mobile screen*/}
           <div className={`w-full flex justify-center ${props.flip?"order-1":"order-2"}`}>
            {
            (props.img2)?
               (<>
               <img src={props.img1} style={{minWidth:props.img1MinWidth,maxWidth:props.img1MaxWidth}} className="block md:hidden" alt={props.alt1} />
               <img src={props.img2} style={{width:props.img2Width}} className="hidden md:block" alt={props.alt2}/>
               </>):
               (<img src={props.img1} style={{minWidth:props.img1MinWidth,maxWidth:props.img1MaxWidth}} alt={props.alt1}/>) 
             } 
            </div>         
        </div>
    </div>
      )
}
export default Card