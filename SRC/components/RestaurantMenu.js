// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {

    // const [resInfo, setResInfo]=useState(null);
    const {resId} = useParams();
    //console.log(params);

 const resInfo = useRestaurantMenu(resId);
    // useEffect(()=>{
    //     FetchMenu();
    // },[]);

    // const FetchMenu = async () =>{
    //     const data = await fetch (MENU_API +resId );
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    //     console.log(resInfo);
    //     };

        if(resInfo === null ) return <Shimmer />;

         const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
         const {itemCards} = 
         resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        //  resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info.name;
        console.log("item cards");
         console.log(itemCards);


    return (
        <div className="menu">
            {/* //optional chaining */}
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item) =>( 
                    <li key={item.card.info.id}> 
                    
                        {item.card.info.name}  - {" Rs."}
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
                {/* <li>{itemCards[4]?.card?.info.name}</li>
                <li>{itemCards[7]?.card?.info.name}</li>
                <li>{itemCards[9]?.card?.info.name}</li>
                <li>{itemCards[18]?.card?.info.name}</li> */}
                
            </ul>
        </div>
        
    );
};
export default RestaurantMenu;
