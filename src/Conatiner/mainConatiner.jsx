import Appliances from "./appliances";
import Banner from "./bannerDesign";
import Slider from "./imageSlider";
import MobileSlider from "./mobileSlider";

export default function MainConatiner(){
    return(
        <>
        <Slider />
        <div className="mobilecontain">
        <h2>Best Deals on Smartphones</h2>
        <MobileSlider />
        </div>
        <div className="bannerConatiner">
        <Banner /></div>
        <div className="mobilecontain">
        <h2>Best Deals On Appliances</h2>
        <Appliances />
        </div>
        </>
   
    )
}