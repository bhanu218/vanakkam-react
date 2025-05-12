const RestaurantCard = ({ resObj }) => {
    // Extract values from resObj (which should contain the restaurant details)
    const { name, cloudinaryImageId, locality, areaName, cuisines, avgRating } = resObj;
 
    return (
      <div className="m-2 p-1 w-56 h-96 bg-gray-200  shadow-lg rounded-xl hover:bg-slate-300 shadow-2xl transition-shadow duration-300">
        <img className=" p-1 m-1  w-52 h-40 justify-center rounded-[15%]" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt={name} />
        <h3 className="font-bold text-lg">{name}</h3>
        <p>{locality}, {areaName}</p>
        <p className="italic">{cuisines}</p> {/* Render cuisines as a comma-separated list */}
        <p className="font-mono"> Average Rating: {avgRating}/5</p>
      </div>
    );
  };

export const WithPromoRestaurant= (RestaurantCard) => {
    return (props) => {
        return (
          <div>
            <label className="absolute  bg-black text-white">Promoted</label>
              <RestaurantCard {...props} />
            
          </div>
          
            
        );
    };
};
  
  export default RestaurantCard;
  
