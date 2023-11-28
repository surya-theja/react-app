import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
    const [ btnName, setBtnName ] = useState("Login");
    console.log("COmponent Rendered");

    useEffect( ()=> {
        console.log("useEffect called");
    },[])

    const authBtnHandler = () => {
        setBtnName((btnName == "Login") ? "Logut" : "Login");
    }

    return (
        <div className="header">
            <img className="logo" src={LOGO_URL} />
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to={"/contact"}>Contact Us</Link></li>
                <li><Link>Cart</Link></li>
                <button className="login" onClick={ authBtnHandler }>{ btnName }</button>
            </ul>
        </div>
    )
};

export default HeaderComponent;