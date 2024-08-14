import RestaurantCard  from "./RestaurantCard";

import { useState } from "react";
import resList from "../utils/mockData";


  
const Body = () => {
   
    
    const [ListOfRestaurants,setListOfRestraunt ]= useState(resList);

   // let ListOfRestaurants =[];
  {/*let ListOfRestaurantsJS =[
        {
            info: {
              id: "405029",
              name: "KFC",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_405025.JPG",
               costForTwo: "₹400 for two",
              cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
              avgRating: 3.8,
                 
            },          
          },
          {
            info: {
              id: "405025",
              name: "Kuduk chiken",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_405025.JPG",
               costForTwo: "₹400 for two",
              cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
              avgRating: 4.5,
                 
            },
           
          },
    ];*/}

    return (
      <div className="body">
      { /* <div className="search">Search</div> */ }

     

      <div className="filter">
           <button className="filter-btn" onClick={()=>{

             const filteredList=ListOfRestaurants.filter(
                
                (res)=> res.info.avgRating>4);
                setListOfRestraunt(filteredList);
            
           }}
           
           >Top rated Restaurants
        
           </button>
      </div>



        <div className="res-container">
         {/*  <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} />
          <RestaurantCard resData={resList[8]} />
          <RestaurantCard resData={resList[9]} /> */}
  
          { ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))}
          
        </div>
      </div>
    );
  };

  export default Body;