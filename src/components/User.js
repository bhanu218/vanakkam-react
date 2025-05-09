import { use, useEffect } from "react";

const User=({name,location})=>{

    

    useEffect(()=>{
        console.log("User component mounted");
        const interval = setInterval(()=>{
            console.log("interval running");
        },100000);
        return () => {
            clearInterval(interval);
            console.log("User component unmounted");
        };
       

       
    })
    return(
        <div className="user-card">
            <h1>User:{name}</h1>
            <h2>name:{location} </h2>
            <h2>email: </h2>

        </div>
    )
}

export default User;