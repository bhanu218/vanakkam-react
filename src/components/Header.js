
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


    }, [OnlineStatus]);

    return(
        <div className='flex justify-between bg-pink-100 shadow-lg mx-2 p-2'>
            <div className='logo-container' >
                <img className="w-[4rem] h-[3rem]" src={LOGO_URL} alt="Food Logo" />
            </div>
            <div className='nav-items'>
                <ul className="flex p-2 space-x-4 ">   
                    <li className={`font-mono ${OnlineStatus ? "text-green-500" : "text-red-500"}`}> {OnlineStatus? "Online"  :"Offline"} </li>
                    
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery </Link>
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
