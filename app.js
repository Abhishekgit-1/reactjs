import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
//**
// * 
// Header
        // Logo
        // Nav Item
// Body
    // Search
    // Restrurent Container
    // RestrurentCart
      // img
      // Name of Restrurent, Rating , cuisine
//Footer
    // CopyRight
    // Links
    // Address
    // Contact
//
//
 //*/

 const Headerpart = () => {
    return (

        <div className="header">
        <div className="logo-Container">
            <img 
            className="logo"
            alt="logo" 
            src="https://i.pinimg.com/736x/b3/e5/f3/b3e5f321d4aedcf983a6c95f5a6d0b88.jpg" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Service</li>
                <li>blog</li>
                <li>Contact</li>
            </ul>
        </div>
        </div>
    );

 };
const stylecolorinline = {
    backgroundColor: "#f8f9fa",
    border: "1px solid #e0e0e0",
}

const cartApiDatalist = [
    {
    type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
    id: "920264",
    name: "Puchhu's Cafe",
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/2/8/a936ac76-25c5-4050-a175-4d7e6f948dc3_eeff4233-e066-4da0-806c-5341735847fb.jpg",
    locality: " Z square mall",
    areaName: "Kakadeo",
    costForTwo: "₹200 for two",
    cuisines: [
    "South Indian",
    "Snacks"
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "599490",
    avgRatingString: "4.4",
    totalRatingsString: "114",
    promoted: true,
    adTrackingId: "cid=27044802~p=1~adgrpid=27044802#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=920264~plpr=COLLECTION~eid=c70f968a-6a8d-4209-82c3-561de2d6a15a~srvts=1745073742078~collid=80424",
    sla: {
    deliveryTime: 41,
    lastMileTravel: 6.7,
    serviceability: "SERVICEABLE",
    slaString: "40-45 mins",
    lastMileTravelString: "6.7 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-04-20 01:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textBased: { },
    imageBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹150 OFF",
    subHeader: "ABOVE ₹299",
    discountTag: "FLAT DEAL",
    logoCtx: {
    text: "BENEFITS"
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { },
    commsStyling: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    campaignId: "27044802"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=920264&source=collection&query=Dosa",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },{
    type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
    id: "69588",
    name: "Food Carnival",
    cloudinaryImageId: "wa8a7irojeoame4wv9yi",
    locality: "Allenganj",
    areaName: "Arya Nagar",
    costForTwo: "₹100 for two",
    cuisines: [
    "Fast Food",
    "South Indian",
    "Biryani",
    "Snacks",
    "Rolls & Wraps",
    "North Indian"
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "81062",
    avgRatingString: "4.3",
    totalRatingsString: "19K+",
    promoted: true,
    adTrackingId: "cid=27731827~p=2~adgrpid=27731827#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=69588~plpr=COLLECTION~eid=df7bb61f-16ec-4f8b-b205-92c62920792f~srvts=1745073742078~collid=80424",
    sla: {
    deliveryTime: 36,
    lastMileTravel: 4.4,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "4.4 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-04-19 23:30:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textBased: { },
    imageBased: {
    badgeObject: [
    {
    attributes: {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    }
    ]
    },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹150 OFF",
    subHeader: "ABOVE ₹249",
    discountTag: "FLAT DEAL",
    logoCtx: {
    text: "BENEFITS"
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { },
    commsStyling: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    campaignId: "27731827"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=69588&source=collection&query=Dosa",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },];

const Body = () => {
  return  (
        //Restaurent item

    <div className="container-fluid py-5 bg-light">
        <div className="container text-center">
            <h2 className="mb-4">Search</h2>
            <div className="row g-4">
            {/* <Restaurentcart cartApiData = {(cartApiDatalist)}/> */}
            {/* {cartApiDatalist.map((item, index) => (
                <Restaurentcart key={index} cartApiData={item} />
            ))} */}
            {/* not using keys (not recommended)---- index as key always use unique id as key */}

            
                {cartApiDatalist.map((cartApiData) => (
                    <Restaurentcart key={cartApiData.info.id} cartApiData={cartApiData} />
                    ))
                }
            

           
                {/* <Restaurentcart cartApiData = {cartApiDatalist[0]}/>
                <Restaurentcart cartApiData = {cartApiDatalist[1]}/> */}
                {/* <Restaurentcart restName= "Pizza Hut" cuisine = "pizaa , burger, thangri , ckn k" rating = "4.5 , 5000+ ratings" time = "55 minuts" srcImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/37d07949-029e-415c-a811-1bd80ca36a3c_81589.jpg" /> */}
                {/* <Restaurentcart restName= "Burger King" cuisine = "burger, king burger, yummmy" rating = "4.0 , 2500+ ratings" time = "20 minuts" srcImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/8ad6d5aa-dc22-44dd-a758-46f2150ba30f_161455.jpg"/>
                <Restaurentcart restName= "The Chinese" cuisine = "pizaa , burger, thangri , ckn" rating = "3.5 , 800+ ratings" time = "25 minuts" srcImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"/>
                 */}
            </div>
        </div>
    </div>
    
    );
};

const Restaurentcart = (props) => {
    const { cartApiData } = props;

    const { cloudinaryImageId,name,cuisines,avgRatingString,slaString } = cartApiData?.info; // Optional chaining to avoid errors if cartApiData is undefined
     return (
             
            
                 <div className="col-lg-3 col-md-3" style={stylecolorinline}>
                     <div className="card border-0 shadow-sm h-100">
                         <img   src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="card-img-top" alt="Insight 1" />
                         <div className="card-body">
                             <h5 className="card-title">{name}</h5> {/* //cartApiData.info.name */}
                             <p className="card-text text-muted">
                             {cuisines.join(", ")}  {/* //cartApiData.info.cuisines.join(", ") */}
                             </p>
                             <p className="card-text text-muted">
                             {avgRatingString} Rating  {/* //cartApiData.info.avgRatingString */}
                             </p>
                             <p className="card-text text-muted">
                             {slaString} Delivery  {/* //cartApiData.info.sla.slaString */}
                            
                             </p>
                             <a href="https://www.smartrecruiters.com/resources/" target="_blank" className="btn btn-primary">Show More</a>
                         </div>
                     </div>
                 </div>
            
     );
 };
const AppLayout = () => {
    return (
        <div className="app">
            <Headerpart/>
            <Body/>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);