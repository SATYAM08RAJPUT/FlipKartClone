import Icons from "../Header/icons";
import ImageGalllery from "../SubHeader/imageGallery";
import { sliderData } from "./sliderData";
import { useState } from "react";

export default function Slider(){
    const[index,setIndex] = useState(0)
    const checkIndex = index < sliderData.length-1
    function onhenadleNext(){
        if(checkIndex){
            setIndex(index+1)
           } else{
            setIndex(0)
           }
    }
    
    function onhenadlePrevious(){
        if(checkIndex){
            setIndex(index-1)
           } else{
            setIndex(0)
           }
    }

    let subData = sliderData[index]
    console.log(index)
    console.log("subData:-",subData)

    return(
        <div className="container">
            <div className="lefticon"><Icons className={"fa fa-arrow-left"} onclick={onhenadlePrevious}/></div>
            <div className="righticon"><Icons className={"fa fa-arrow-right"} onclick={onhenadleNext}/></div>

        <ImageGalllery src={subData.img} className={"slider"} />    
        <ImageGalllery src={"https://rukminim1.flixcart.com/fk-p-flap/1600/140/image/be895694c0ed175b.jpg?q=20"} className={"discount"}/>
        </div>
        
    )
}