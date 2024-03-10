import Icons from "../Header/icons";
import ImageGalllery from "../SubHeader/imageGallery";


export default function Footer(){
    return(
        <>
        <div className="footer">
            <p><Icons className={"fa fa-industry"}/> Become a Seller</p>
            <p> <Icons className={"fa fa-star-o"}/> Advertise</p>
            <p><Icons className={"fa fa-gift"}/> Gift Cards</p>
            <p> <Icons className={"fa fa-question-circle"}/> Help Center</p>
            <p> <Icons className={"fa fa-industry"}/> @2007-2024 Flipcard.com</p>
            <ImageGalllery src={"https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"}/>
        </div>
    </>
    )
}