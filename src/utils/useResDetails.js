
import { useState, useEffect} from 'react';
 // Importing the base URL for restaurant menu
import { RESTAURANT_MENU_URL } from './constants.js';

const useResDetails= ((resId) => {
    const [itemDetails, setItemDetails] = useState(resId); // State to hold item details

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
    return itemDetails;
 });

export default useResDetails; // Exporting the custom hook for use in other components