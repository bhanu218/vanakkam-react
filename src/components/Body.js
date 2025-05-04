import RestaurantCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{

    const [Restaurantlist,setRestaurantlist]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.331501446495793&lng=78.57271369546652&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json=await data.json();
   console.log(json);
   console.log(json.data.cards[3].card.card.info);
    setRestaurantlist( json?.data?.cards?.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      ).map((card) => card.card.card.info));


    };

    if(Restaurantlist.length===0){
        return <Shimmer/>
    }

   return(
       <div className='body'>
           <div className='filter'>
            <button className="filter-btn" onClick={()=>{
              const filteredlist=resList.filter((res)=>res.info.avgRating>4.3)
              setRestaurantlist(filteredlist);
              console.log(setRestaurantlist);
              console.log(Restaurantlist);
            }}>top rated restaurants </button>
           </div> 
           <div className='res-container'>
           {Restaurantlist.map((res)=> <RestaurantCard key={res.id} resObj={res}/>)}
           
           </div>
       </div>
   )
}

export default Body;