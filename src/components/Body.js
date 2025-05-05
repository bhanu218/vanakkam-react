import RestaurantCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{

    const [Restaurantlist,setRestaurantlist]=useState([]);
    const [FilteredRestaurant, setFilteredRestaurant]=useState([]);
    const [searchText, setSearchText]=useState("");


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.331501446495793&lng=78.57271369546652&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json=await data.json();
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
 
    console.log("search is working fine ");
   return Restaurantlist.length===0 ? <Shimmer />: (
       <div className='body'>
            <div className="search">
                <input type="text" className="search-text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} ></input>
                <button className="btn-search" onClick={()=>{
                    const resFiltered= Restaurantlist.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase())); 
                    setFilteredRestaurant(resFiltered); 
                    }}
                    >search
                    </button>

            </div>
           <div className='filter'>
            <button className="filter-btn" onClick={()=>{
              const filteredlist=Restaurantlist.filter((res)=>res.avgRating>4.3)
              setFilteredRestaurant(filteredlist);
            
            }}>top rated restaurants </button>
           </div> 
           <div className='res-container'>
           {FilteredRestaurant.map((res)=> <RestaurantCard key={res.id} resObj={res}/>)}
           
           </div>
       </div>
   )
}

export default Body;