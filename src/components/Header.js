
import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{
    const [btnName, setBtnName] =useState("Login");

    const [OnlineStatus, setOnlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
        window.addEventListener("offline", () => {
            setOnlineStatus(false);

        });

        return () => {
            window.removeEventListener("online", () => {
                setOnlineStatus(true);
            });
            window.removeEventListener("offline", () => {
                setOnlineStatus(false);
            });
        };


    }, []);

    return(
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL} alt="Food Logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>{OnlineStatus? "Online":"offline"} </li>
                    
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="btn-login" onClick={()=> btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>

                </ul>
                
            </div>
        </div>
    )
};


export default Header;
