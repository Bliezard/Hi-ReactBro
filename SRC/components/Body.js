import RestaurantCard  from "./RestaurantCard";

import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";


  
const Body = () => {
   
    
    const [ListOfRestaurants,setListOfRestraunt ]= useState([]);
    const [filteredRestaurant, setFilteredRestaurant]=useState([]);

    const [searchText, setSearchText] = useState("");

    console.log("body render again");

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData = async () => {
      const data = await fetch(
        "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.842377&lng=81.0115835&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
      const json = await data.json();


      // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      //below we used optional chaining
      console.log(json);  
      setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


   {/*  // Conditional Rendering
    // if(ListOfRestaurants.length === 0)
    // {
    //   return <Shimmer></Shimmer>;
      
    // }

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

    //  We have used terinary operator below in return statement, nothing fancy
    return ListOfRestaurants.length === 0 ? (
    <Shimmer /> 
    ): (
      <div className="body">
      { /* <div className="search">Search</div> */ }
         <div className="filter">
           <div className="search">
              <input type="text" className="search-box"
               value={searchText}
               onChange={ (e) => {
                setSearchText(e.target.value);
               }}
               />
               <button onClick={()=>{
                // Update the restro cards and update the UI
                // search Text
                console.log(searchText);
                const FilteredRestaurant = ListOfRestaurants.filter((res)=> 
                  res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                  setFilteredRestaurant(FilteredRestaurant);
               }}>search</button>
            </div>

            <button className="filter-btn" onClick={()=>{

             const filteredList=ListOfRestaurants.filter((res)=> res.info.avgRating>4.5);
             console.log(filteredList)
             setFilteredRestaurant(filteredList);
           }}>Top rated Restaurants</button>
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
  
          { filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))}


          
        </div>
      </div>
    );
  };

  export default Body;