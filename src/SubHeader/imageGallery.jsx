export default function ImageGalllery({src,children,className}){
    return(
        <img src={src} className={className}>{children}</img>
    )
}