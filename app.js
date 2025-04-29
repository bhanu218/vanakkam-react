
import React from 'react';
import ReactDOM from 'react-dom/client';




const Header=()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src="https://marketplace.canva.com/EAGK6XNcgJM/1/0/1600w/canva-orange-and-yellow-simple-street-food-logo-P8-5uoYzOgo.jpg" alt="Food Logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
                
            </div>
        </div>
    )
};




const RestaurantCard= (props)=>{
   console.log(props);
   const {cuisine,resName,rating}=props.resObj;
    return (
        <div className='res-card'>
            <img className='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/7dc04c75-d8d8-4e37-ad11-dc07a59cc19b_627394.jpg' />
            <h3 >{resName}</h3>
            <h4 >{cuisine.join(',')}</h4>
            <h4 >{rating} Rating</h4>
        </div>
    )
}

const resData= {data : [
    {
      id: 1,
      resName: "Pizza Palace",
      rating: 4.5,
      timeToDeliver: "30 mins",
      cuisine: ["Italian", "Pasta", "Pizza"],
      image: "images/pizza-palace.jpg",
      offer: "20% OFF up to ₹100",
      costForTwo: "₹400 for two",
      veg: false,
      isPromoted: true,
      deliveryFee: "₹30",
      distance: "2.3 km"
    },
    {
      id: 2,
      resName: "Sushi World",
      rating: 4.7,
      timeToDeliver: "25 mins",
      cuisine: ["Japanese", "Sushi"],
      image: "images/sushi-world.jpg",
      offer: "Flat ₹75 OFF",
      costForTwo: "₹600 for two",
      veg: false,
      isPromoted: false,
      deliveryFee: "Free Delivery",
      distance: "1.8 km"
    },
    {
      id: 3,
      resName: "Curry House",
      rating: 4.3,
      timeToDeliver: "40 mins",
      cuisine: ["Indian", "Biryani", "North Indian"],
      image: "images/curry-house.jpg",
      offer: "30% OFF up to ₹120",
      costForTwo: "₹350 for two",
      veg: true,
      isPromoted: false,
      deliveryFee: "₹20",
      distance: "3.1 km"
    },
    {
      id: 4,
      resName: "Taco Town",
      rating: 4.2,
      timeToDeliver: "20 mins",
      cuisine: ["Mexican", "Wraps"],
      image: "images/taco-town.jpg",
      offer: "10% OFF up to ₹50",
      costForTwo: "₹300 for two",
      veg: false,
      isPromoted: true,
      deliveryFee: "₹15",
      distance: "1.2 km"
    },
    {
      id: 5,
      resName: "Burger Barn",
      rating: 4.0,
      timeToDeliver: "15 mins",
      cuisine: ["American", "Burgers", "Fries"],
      image: "images/burger-barn.jpg",
      offer: "Buy 1 Get 1 Free",
      costForTwo: "₹250 for two",
      veg: false,
      isPromoted: false,
      deliveryFee: "Free Delivery",
      distance: "0.9 km"
    },
    {
      id: 6,
      resName: "Green Garden",
      rating: 4.6,
      timeToDeliver: "35 mins",
      cuisine: ["Salads", "Healthy", "Continental"],
      image: "images/green-garden.jpg",
      offer: "15% OFF on orders above ₹200",
      costForTwo: "₹300 for two",
      veg: true,
      isPromoted: true,
      deliveryFee: "₹25",
      distance: "2.0 km"
    },
    {
      id: 7,
      resName: "Spicy Affair",
      rating: 4.1,
      timeToDeliver: "28 mins",
      cuisine: ["Indian", "Chinese", "Snacks"],
      image: "images/spicy-affair.jpg",
      offer: "Combo Deals Available",
      costForTwo: "₹350 for two",
      veg: true,
      isPromoted: false,
      deliveryFee: "₹20",
      distance: "2.7 km"
    },
    {
      id: 8,
      resName: "Noodle Nest",
      rating: 4.3,
      timeToDeliver: "22 mins",
      cuisine: ["Asian", "Chinese", "Thai"],
      image: "images/noodle-nest.jpg",
      offer: "25% OFF above ₹250",
      costForTwo: "₹400 for two",
      veg: false,
      isPromoted: true,
      deliveryFee: "₹30",
      distance: "1.5 km"
    },
    {
      id: 9,
      resName: "The Dosa Factory",
      rating: 4.5,
      timeToDeliver: "18 mins",
      cuisine: ["South Indian", "Breakfast"],
      image: "images/dosa-factory.jpg",
      offer: "₹50 OFF on orders over ₹300",
      costForTwo: "₹200 for two",
      veg: true,
      isPromoted: false,
      deliveryFee: "Free Delivery",
      distance: "0.7 km"
    },
    {
      id: 10,
      resName: "Momos Point",
      rating: 4.0,
      timeToDeliver: "26 mins",
      cuisine: ["Tibetan", "Chinese", "Street Food"],
      image: "images/momos-point.jpg",
      offer: "Free Drink with Momos",
      costForTwo: "₹150 for two",
      veg: true,
      isPromoted: false,
      deliveryFee: "₹10",
      distance: "1.0 km"
    },
    {
      id: 11,
      resName: "Grill & Chill",
      rating: 4.6,
      timeToDeliver: "30 mins",
      cuisine: ["BBQ", "American", "Steak"],
      image: "images/grill-chill.jpg",
      offer: "20% OFF for new users",
      costForTwo: "₹700 for two",
      veg: false,
      isPromoted: true,
      deliveryFee: "₹40",
      distance: "3.6 km"
    },
    {
      id: 12,
      resName: "Paneer Junction",
      rating: 4.4,
      timeToDeliver: "32 mins",
      cuisine: ["Indian", "Punjabi", "North Indian"],
      image: "images/paneer-junction.jpg",
      offer: "30% OFF up to ₹80",
      costForTwo: "₹300 for two",
      veg: true,
      isPromoted: false,
      deliveryFee: "₹15",
      distance: "2.9 km"
    },
    {
      id: 13,
      resName: "Wrap It Up",
      rating: 4.1,
      timeToDeliver: "24 mins",
      cuisine: ["Wraps", "Kebabs", "Fast Food"],
      image: "images/wrap-it-up.jpg",
      offer: "Free Fries on orders over ₹250",
      costForTwo: "₹280 for two",
      veg: false,
      isPromoted: false,
      deliveryFee: "₹10",
      distance: "1.4 km"
    },
    {
      id: 14,
      resName: "Biryani Bazaar",
      rating: 4.8,
      timeToDeliver: "27 mins",
      cuisine: ["Biryani", "Hyderabadi", "Indian"],
      image: "images/biryani-bazaar.jpg",
      offer: "₹100 OFF on ₹500+",
      costForTwo: "₹500 for two",
      veg: false,
      isPromoted: true,
      deliveryFee: "₹25",
      distance: "3.2 km"
    },
    {
      id: 15,
      resName: "Cafe Delight",
      rating: 4.3,
      timeToDeliver: "19 mins",
      cuisine: ["Cafe", "Desserts", "Bakery"],
      image: "images/cafe-delight.jpg",
      offer: "15% OFF on coffee combos",
      costForTwo: "₹200 for two",
      veg: true,
      isPromoted: false,
      deliveryFee: "Free Delivery",
      distance: "0.6 km"
    }
  ]
}
  
const Body=()=>{
    return(
        <div className='body'>
            <div className='search-container'>
                <input type="text" placeholder='Search for food items' />
                <button className='search-btn'>Search</button>
            </div> 
            <div className='res-container'>
            {resData.data.map((res)=> <RestaurantCard key={res.id} resObj={res}/>)}
            
            </div>
        </div>
    )
}



const AppLayout=()=>{
    return(
        <div className='app-layout'>
            <Header/>
            <Body/>
        </div>
    )
};
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);