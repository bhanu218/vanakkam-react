
import { useState, useEffect} from 'react';
 // Importing the base URL for restaurant menu
import { RESTAURANT_MENU_URL } from './constants.js';

const useResDetails= ((resId) => {
    const [itemDetails, setItemDetails] = useState(resId); // State to hold item details



    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
       

        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4913813&lng=73.8367603&restaurantId=${resId}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`); 
        const json = await data.json();
        const resMenuList=json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item.card?.card?.["@type"]===("type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") ); // Filtering the cards to get the menu items
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item.card?.card?.["@type"]===("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))); 
console.log(resMenuList);
        setItemDetails(resMenuList); // Extracting the restaurant details from the respons 
     
    };
    return itemDetails;
 });

export default useResDetails; // Exporting the custom hook for use in other components