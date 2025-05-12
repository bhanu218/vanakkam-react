import ItemList from "./ItemList";  

const RestaurantCategory = (props)=>{
    const {title,categories}= props.item; // Destructure the card object from props
    console.log(props);
    return(
        <div >
            <div className="  w-auto p-2 m-4 bg-slate-100 shadow-lg  rounded-lg ">
                
                <div className="flex justify-between items-center ">
                    <span className="font-bold">{title} [{categories.length}]</span>
                    <span >⬇️</span>
                </div>
                     <ItemList  item={props.item}/>
                
            </div>
   
            
           
            
        </div>
    )
};

export default RestaurantCategory;