import InputFiled from "./inputField";
import Logo from "./logo";
import Navigation from "./navigation";

export default function Header(){
    return (
        <header>
            <div className="leftside"><Logo /></div>
            <div className="middleside"><InputFiled className={"inputsearch"} placeholder={"Search for Products, Brand and More"}/></div>
            <div className="rightside"><Navigation /></div>
        </header>
    )
}