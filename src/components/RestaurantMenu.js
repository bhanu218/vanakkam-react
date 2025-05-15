import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import  useResDetails  from "../utils/useResDetails"; // Custom hook to fetch restaurant details
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {
    const { resId } = useParams(); // Extracting resId from the URL parameters

    //custom hook to fetch data

    const itemDetails= useResDetails(resId); // State to hold item details
    
    const [showIndex,setShowIndex]=useState(null);
  


    return (
         
        <div className="flex justify-center bg-white ">
            <div className="text-center m-2 p-4 w-8/12 h-auto bg-gray-100 shadow-lg rounded-lg">
                <h2 className="font-bold">Restaurant Menu:</h2>

                {Array.isArray(itemDetails) ? (
                itemDetails.map((item,index) => (
                    <RestaurantCategory
                    key={item?.card?.card?.title}
                    item={item?.card?.card}
                    showItems={index===showIndex ?true:false}
                    setShowIndex={()=>setShowIndex(index)}
                    />
                    
                ))
                ) : (
                <p>Loading menu...</p>
                )}
            </div>
        </div>

    );
};


export default RestaurantMenu;
// import { useParams } from "react-router-dom";
