import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import  useResDetails  from "../utils/useResDetails"; // Custom hook to fetch restaurant details



const RestaurantMenu = () => {
    const { resId } = useParams(); // Extracting resId from the URL parameters

    //custom hook to fetch data

    const itemDetails= useResDetails(resId); // State to hold item details
    
    if (!itemDetails?.name) {
        return <Shimmer />;
      }
    

    return (
        <div className="restaurant-menu">
            <h1>Restaurant Menu</h1>
            <h2>Menu will be displayed here</h2>
            <ul>
                <li>{itemDetails.name}-{itemDetails.costForTwoMessage}</li>
                <li> {itemDetails.cuisines.join(", ")} </li>
                <li>{itemDetails.avgRating}</li>
            </ul>
            
            </div>

    );
};


export default RestaurantMenu;
// import { useParams } from "react-router-dom";
