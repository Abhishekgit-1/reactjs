
import { useState } from "react";



const BodyPart = (props) => { 
    const { ResDatalist } = props; // Get the ResDatalist from props
    let [ resDatalist , setresDatalist] = useState(ResDatalist); // Initialize state with the mock data
    // let listOfRestaurants = [ {info: {
    //     id: "213872",
    //     name: "Manoj Fast Food and Dosa Corner",
    //     cloudinaryImageId: "vkrgqhzmcmywq6yfffa9",
    //     locality: "Sarvodaya Nagar",
    //     areaName: "Rawatpur",
    //     costForTwo: "₹150 for two",
    //     cuisines: [
    //     "South Indian",
    //     "Chinese",
    //     "Snacks",
    //     "Burgers",
    //     "Navratri Special"
    //     ],
    //     avgRating: 3.1,
    //     veg: true,
    //     parentId: "132178",
    //     avgRatingString: "4.4",
    //     totalRatingsString: "2.1K+",
    //     sla: {
    //     deliveryTime: 37,
    //     lastMileTravel: 6.4,
    //     serviceability: "SERVICEABLE",
    //     slaString: "35-40 mins",
    //     lastMileTravelString: "6.4 km",
    //     iconType: "ICON_TYPE_EMPTY"
    //     }}},{info: {
    //         id: "213855",
    //         name: "KFC",
    //         cloudinaryImageId: "vkrgqhzmcmywq6yfffa9",
    //         locality: "Sarvodaya Nagar",
    //         areaName: "Rawatpur",
    //         costForTwo: "₹150 for two",
    //         cuisines: [
    //         "South Indian",
    //         "Chinese",
    //         "Snacks",
    //         "Burgers",
    //         "Navratri Special"
    //         ],
    //         avgRating: 4.4,
    //         veg: true,
    //         parentId: "132178",
    //         avgRatingString: "4.4",
    //         totalRatingsString: "2.1K+",
    //         sla: {
    //         deliveryTime: 37,
    //         lastMileTravel: 6.4,
    //         serviceability: "SERVICEABLE",
    //         slaString: "35-40 mins",
    //         lastMileTravelString: "6.4 km",
    //         iconType: "ICON_TYPE_EMPTY"
    //         }}},];
    return (
        <div className="body-part">
            <div className="search-bar">
                <input type="text" placeholder="Search for restaurants, dishes, or cuisines" />
                <button type="button" >Search</button>
                <button type="button" onClick={ () => {
                  resDatalist=  resDatalist.filter(
                    (res) => res.info.avgRating > 4.1); 
                    setresDatalist(resDatalist);
                }}>Filter- Top rated Restaurant</button>
            </div>
            <div className="restaurant-container">
                {resDatalist.map((restaurant, index) => {
                    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, slaString } = restaurant.info; // Destructure inside the map
                    return (
                        <div key={restaurant.info.id} className="restaurant-card">
                            <img
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                                alt={name}
                                className="restaurant-image"
                            />
                            <div className="restaurant-details">
                                <h3 className="restaurant-name">{name}</h3>
                                <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
                                <p className="restaurant-rating">Rating: {avgRating}</p>
                                <p className="restaurant-cost">{costForTwo}</p>
                                <p className="restaurant-delivery-time">{slaString}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BodyPart;