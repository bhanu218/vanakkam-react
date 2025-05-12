
const ItemList=({item}) =>{
    console.log("hi"+ item.categories[0].itemCards[0].card);
    return(
        <div >
           
            {item.categories.map((catagories)=>(
                <div key={catagories.title}  className=" m-2 p-2">
                  {catagories.itemCards.map((indiviualItem)=>(
                   
                    <div key={indiviualItem.card.info.id} className=" flex  justify-between m-4 p-2 hover:cursor-pointer hover:bg-gray-300 shadow-xl transition-transform" >
                       <div className="flex w-8/12 flex-col text-left" >
                        <span className="font-semibold">{indiviualItem.card.info.name}: Rs.{indiviualItem.card.info.price/100}</span>
                        <span className="italic ">{indiviualItem.card.info.description}</span>
                        
                        </div>

                        <div>
                            <div className="absolute">
                                <button className="bg-black text-white p-2 mx-11 my-3 rounded-xl border-hidden">
                                    +Add

                                </button>
                                </div>
                         <img className="w-36 h-36" src={`https://media-assets.swiggy.com/${indiviualItem.card.info.imageId}`}></img>

                        </div>
                        


                    </div>
                  ))}
                

                </div>
            ))}
           
       </div>
    )

};

export default ItemList;