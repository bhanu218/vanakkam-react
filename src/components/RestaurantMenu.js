import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_URL } from "../utils/Constants";

const RestaurantMenu = () => {
    const { resId } = useParams(); // Extracting resId from the URL parameters

    const [itemDetails, setItemDetails] = useState({}); // State to hold item details

    console.log(itemDetails);

    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
       

        const data = await fetch(RESTAURANT_MENU_URL + resId); 
        const json = await data.json();
        console.log(json);
        setItemDetails(json?.data?.cards[2]?.card?.card?.info);

    };
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
