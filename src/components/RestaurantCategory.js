import ItemList from "./ItemList";  
import { useState } from "react";


const RestaurantCategory = ({item,showItems,setShowIndex})=>{
    const {title,categories}= item; // Destructure the card object from props
    

   

    const handleClick=()=>{
        
       setShowIndex();
      
    }
    return(
        <div >
            <div className="  w-auto p-2 m-4 bg-slate-100 shadow-lg  rounded-lg ">
                
                <div className="flex justify-between items-center hover:cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">{title} [{categories.length}]</span>
                    <span >⬇️</span>
                </div>
                    { showItems && <ItemList  item={item}/>}
                
            </div>
   
            
           
            
        </div>
    )
};

export default RestaurantCategory;