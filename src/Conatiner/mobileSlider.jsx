import Icons from "../Header/icons";
import ImageGalllery from "../SubHeader/imageGallery"
import { mobileData } from "./mobileData"


export default function MobileSlider(){
    const mobilestore = mobileData.map((item,index) => {
        return <div className="mobileConatiner" key={item.id}>
            <ImageGalllery src={item.image} className={"mobileimg"}/>
            <h3>{item.title}</h3>
        </div>
        
    })
    return(
        <>
        <div className="mobileStore">
        {mobilestore}
        </div>
        </>
   
    )
}