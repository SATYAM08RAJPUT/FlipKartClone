import { appliancesData } from "./appliancesData"
import ImageGalllery from "../SubHeader/imageGallery"

export default function Appliances(){
    const appliancesstore = appliancesData.map((item) => {
        return <div className="mobileConatiner" key={item.id}>
            <ImageGalllery src={item.image} className={"mobileimg"}/>
            <h3>{item.title}</h3>
        </div>
    })
    return(
        <>
        <div className="mobileStore">
        {appliancesstore}
        </div>
        </>
   
    )
}