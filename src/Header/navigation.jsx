import Attrubute from "./attrubute";

import Icons from "./icons";

export default function Navigation(){
    return(
        <div className="rightside">
            <Attrubute><Icons className={"fa fa-user"}/> {"Login"}</Attrubute>
            <Attrubute><Icons className={"fa fa-shopping-cart"}/>  {"Cart"}</Attrubute>
            <Attrubute><Icons className={"fa fa-industry"}/>  {"Become a seller"}</Attrubute>
        </div>
    )
}