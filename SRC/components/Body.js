import RestaurantCard  from "./RestaurantCard";

import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


  
const Body = () => {
   
    
    const [ListOfRestaurants,setListOfRestraunt ]= useState([]);
    const [filteredRestaurant, setFilteredRestaurant]=useState([]);

    const [searchText, setSearchText] = useState("");

    

    console.log("body render again", ListOfRestaurants);

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


const onlineStatus = useOnlineStatus();
if(onlineStatus === false) return <h1>looks like you are offline, please check your internet connection!!!</h1>

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
      
         <div className="filter flex">
           <div className="search m-4 p-4">
              <input type="text" 
                className="border border-solid border-black"
                value={searchText}
                onChange={ (e) => {
                setSearchText(e.target.value);
               }}
               />
               <button 
               className="px-4 py-2 bg-green-100 m-4 rounded-lg"
               onClick={()=>{
                // Update the restro cards and update the UI
                // search Text
                console.log(searchText);
                const FilteredRestaurant = ListOfRestaurants.filter((res)=> 
                  res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                  setFilteredRestaurant(FilteredRestaurant);
               }}>search</button>
            </div >
               <div className="search m-4 p-4 flex items-center">
               <button 
                  className="px-4 py-2 bg-gray-100 rounded-lg" 
                  onClick={()=>{
                    const filteredList=ListOfRestaurants.filter(
                      (res)=> res.info.avgRating>4.5
                    );
                // console.log(filteredList)
                    setFilteredRestaurant(filteredList);
                  }}
                  >
                      Top rated Restaurants
                    </button>
               </div>
            {/* <button className="px-4 py-2 bg-gray-100" onClick={()=>{

             const filteredList=ListOfRestaurants.filter((res)=> res.info.avgRating>4.5);
             console.log(filteredList)
             setFilteredRestaurant(filteredList);
           }}>Top rated Restaurants</button> */}
        </div>



        <div className="flex flex-wrap">
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
         <Link 
         className="RestaurantsCardLink"
         key={restaurant.info.id} 
         to={"/restaurants/" + restaurant.info.id}
         >
          
          <RestaurantCard  resData={restaurant} />
        
         </Link> 
          ))}
      </div>
      </div>
    );
  };

  export default Body;