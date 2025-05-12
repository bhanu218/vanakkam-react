import RestaurantCard,{WithPromoRestaurant} from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body=()=>{

    const [Restaurantlist,setRestaurantlist]=useState([]);
    const [FilteredRestaurant, setFilteredRestaurant]=useState([]);
    const [searchText, setSearchText]=useState("");

    const WithPromoList= WithPromoRestaurant(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4913813&lng=73.8367603&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json= await data.json();
    
    console.log(json);
    setRestaurantlist( json?.data?.cards?.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      ).map((card) => card.card.card.info));

      setFilteredRestaurant( json?.data?.cards?.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      ).map((card) => card.card.card.info));
      

    };
 

   return Restaurantlist.length===0 ? <Shimmer />: (
       <div className='body'>
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black p-1 m-2 rounded-md " value={searchText} onChange={(e)=>setSearchText(e.target.value)} ></input>
                <button className="p-2 m-2 bg-green-400 rounded-md  hover: cursor-pointer " onClick={()=>{
                    const resFiltered= Restaurantlist.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase())); 
                    setFilteredRestaurant(resFiltered); 
                    }}
                    >search
                </button>

           
                <button className="p-2 m-2 bg-blue-100 rounded-md  hover: cursor-pointer" onClick={()=>{
                  const filteredlist= Restaurantlist.filter((res)=>res.avgRating>4.1);
                  
                  setFilteredRestaurant(filteredlist);
                  }}>
                    top rated restaurants 
                </button>
           </div> 
           <div className='flex flex-wrap'>
              {FilteredRestaurant.map((res)=> ( 
                <Link key={res.id} to={"/restaurant/" + res.id}>{res.promoted ? ( <WithPromoList resObj={res} />) :( <RestaurantCard  resObj={res}/>)}
                </Link>
               
              ))
              };
           
           </div>
       </div>
   )
}

export default Body;