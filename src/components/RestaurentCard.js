const RestaurantCard = ({ resObj }) => {
    // Extract values from resObj (which should contain the restaurant details)
    const { name, cloudinaryImageId, locality, areaName, cuisines, avgRating } = resObj;
 
    return (
      <div className="res-card">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt={name} />
        <h3>{name}</h3>
        <p>{locality}, {areaName}</p>
        <p>{cuisines.join(", ")}</p> {/* Render cuisines as a comma-separated list */}
        <p>Rating: {avgRating}</p>
      </div>
    );
  };
  
  export default RestaurantCard;
  
