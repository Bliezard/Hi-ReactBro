import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img
                className="logo"
                src="https://www.logodesign.net/logo/smocking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const { resData } = props;
    return(
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
            className= "res-logo"
            alt= "res-logo"
            src= {
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"
                + resData.info.cloudinaryImageId
            }
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} mins</h4>
        </div>
    );
};

const resObj = {
    info: {
        id: "405025",
      name: "KFC",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_405025.JPG",
      locality: "Hazratganj",
      areaName: "Hazratganj",
      costForTwo: "₹400 for two",
      cuisines: [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      avgRating: 4.4,
      parentId: "547",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-08 23:00:00",
        opened: true
      },
      badges: {
        
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            
          },
          textBased: {
            
          },
          textExtendedBadges: {
            
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "5K+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-hazratganj-lucknow-405025",
      type: "WEBLINK"
    }
  }

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
                <div className="res-container">
                    <RestaurantCard resData= {resObj} />
                </div>
        </div>
    );
};
 
const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)