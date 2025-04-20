import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

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
const resDatalist = [
    {
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
        },{
            type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
            id: "863802",
            name: "Kallu Photo Makhan And Fast Food",
            cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/4/629419e3-2e35-4260-8f98-098d7b733ea1_2690eddd-5334-49e7-a2f7-5808408c40cf.jpeg",
            locality: "Naughara",
            areaName: "Naveen Market",
            costForTwo: "₹500 for two",
            cuisines: [
            "South Indian",
            "Chinese",
            "Fast Food",
            "Pizzas",
            "Momos",
            "Burgers"
            ],
            avgRating: 4.4,
            veg: true,
            parentId: "506571",
            avgRatingString: "4.4",
            totalRatingsString: "47",
            sla: {
            deliveryTime: 42,
            lastMileTravel: 0.8,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "0.8 km",
            iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
            nextCloseTime: "2025-04-20 00:00:00",
            opened: true
            },
            badges: {
            imageBadges: [
            {
            imageId: "bolt/bolt%206.png",
            description: "bolt!"
            }
            ]
            },
            isOpen: true,
            aggregatedDiscountInfoV2: { },
            type: "F",
            badgesV2: {
            entityBadges: {
            textExtendedBadges: { },
            textBased: { },
            imageBased: {
            badgeObject: [
            {
            attributes: {
            imageId: "bolt/bolt%206.png",
            description: "bolt!"
            }
            }
            ]
            }
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
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            analytics: { },
            cta: {
            link: "swiggy://menu?restaurant_id=863802&source=collection&query=Dosa",
            text: "RESTAURANT_MENU",
            type: "DEEPLINK"
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },{
                type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                id: "401189",
                name: "Pandit's",
                cloudinaryImageId: "owfvfvuedvvwuui2fine",
                locality: "Lajpat Nagar",
                areaName: "Cantt",
                costForTwo: "₹300 for two",
                cuisines: [
                "South Indian",
                "Sweets",
                "Snacks",
                "Chinese",
                "Navratri Special",
                "Ice Cream Cakes"
                ],
                avgRating: 4.4,
                veg: true,
                parentId: "230358",
                avgRatingString: "4.4",
                totalRatingsString: "610",
                sla: {
                deliveryTime: 54,
                lastMileTravel: 2.1,
                serviceability: "SERVICEABLE",
                slaString: "50-55 mins",
                lastMileTravelString: "2.1 km",
                iconType: "ICON_TYPE_EMPTY"
                },
                availability: {
                nextCloseTime: "2025-04-19 23:00:00",
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
                header: "₹50 OFF",
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
                rating: "3.8",
                ratingCount: "8.3K+"
                },
                source: "GOOGLE",
                sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
                },
                ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                analytics: { },
                cta: {
                link: "swiggy://menu?restaurant_id=401189&source=collection&query=Dosa",
                text: "RESTAURANT_MENU",
                type: "DEEPLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                },{
                    type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    info: {
                    id: "315389",
                    name: "Kesarwani Dosa",
                    cloudinaryImageId: "7ee2f3d161b66bb85a14a6517a3bab9b",
                    locality: "Allenganj",
                    areaName: "Arya Nagar",
                    costForTwo: "₹150 for two",
                    cuisines: [
                    "South Indian",
                    "Chinese",
                    "Snacks",
                    "Kebabs",
                    "Beverages",
                    "Biryani"
                    ],
                    avgRating: 4.4,
                    veg: true,
                    parentId: "476555",
                    avgRatingString: "4.4",
                    totalRatingsString: "2.6K+",
                    promoted: true,
                    adTrackingId: "cid=27847477~p=3~adgrpid=27847477#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=315389~plpr=COLLECTION~eid=daad53da-a659-4763-bb09-574f1186212e~srvts=1745073742078~collid=80424",
                    sla: {
                    deliveryTime: 34,
                    lastMileTravel: 4.4,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
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
                    imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                    description: "Delivery!"
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
                    imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                    description: "Delivery!"
                    }
                    }
                    ]
                    },
                    textExtendedBadges: { }
                    }
                    },
                    aggregatedDiscountInfoV3: {
                    header: "ITEMS",
                    subHeader: "AT ₹99"
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
                    campaignId: "27847477"
                    },
                    analytics: { },
                    cta: {
                    link: "swiggy://menu?restaurant_id=315389&source=collection&query=Dosa",
                    text: "RESTAURANT_MENU",
                    type: "DEEPLINK"
                    },
                    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },{
                        type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        info: {
                        id: "814319",
                        name: "Pa S Kitchen",
                        cloudinaryImageId: "741ad9dfd5b772dfe701b20f1ac0cb33",
                        locality: "CliveRoad",
                        areaName: "Naveen Market",
                        costForTwo: "₹250 for two",
                        cuisines: [
                        "South Indian"
                        ],
                        avgRating: 4.6,
                        veg: true,
                        parentId: "485337",
                        avgRatingString: "4.6",
                        totalRatingsString: "7",
                        sla: {
                        deliveryTime: 63,
                        lastMileTravel: 1.8,
                        serviceability: "SERVICEABLE",
                        slaString: "60-65 mins",
                        lastMileTravelString: "1.8 km",
                        iconType: "ICON_TYPE_EMPTY"
                        },
                        availability: {
                        nextCloseTime: "2025-04-19 22:00:00",
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
                        textExtendedBadges: { },
                        textBased: { }
                        }
                        },
                        aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹50",
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
                        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        analytics: { },
                        cta: {
                        link: "swiggy://menu?restaurant_id=814319&source=collection&query=Dosa",
                        text: "RESTAURANT_MENU",
                        type: "DEEPLINK"
                        },
                        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                        },{
                            type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                            info: {
                            id: "213872",
                            name: "Manoj Fast Food and Dosa Corner",
                            cloudinaryImageId: "vkrgqhzmcmywq6yfffa9",
                            locality: "Sarvodaya Nagar",
                            areaName: "Rawatpur",
                            costForTwo: "₹150 for two",
                            cuisines: [
                            "South Indian",
                            "Chinese",
                            "Snacks",
                            "Burgers",
                            "Navratri Special"
                            ],
                            avgRating: 4.4,
                            veg: true,
                            parentId: "132178",
                            avgRatingString: "4.4",
                            totalRatingsString: "2.1K+",
                            promoted: true,
                            adTrackingId: "cid=27587135~p=5~adgrpid=27587135#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=213872~plpr=COLLECTION~eid=dfff833b-b8b8-4321-b04d-944857383b8d~srvts=1745073742078~collid=80424",
                            sla: {
                            deliveryTime: 37,
                            lastMileTravel: 6.4,
                            serviceability: "SERVICEABLE",
                            slaString: "35-40 mins",
                            lastMileTravelString: "6.4 km",
                            iconType: "ICON_TYPE_EMPTY"
                            },
                            availability: {
                            nextCloseTime: "2025-04-19 22:30:00",
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
                            textExtendedBadges: { },
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
                            }
                            }
                            },
                            aggregatedDiscountInfoV3: {
                            header: "ITEMS",
                            subHeader: "AT ₹65",
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
                            campaignId: "27587135"
                            },
                            analytics: { },
                            cta: {
                            link: "swiggy://menu?restaurant_id=213872&source=collection&query=Dosa",
                            text: "RESTAURANT_MENU",
                            type: "DEEPLINK"
                            },
                            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                            },
];
const BodyPart = (props) => { 
    const { ResDatalist } = props; // Get the ResDatalist from props

    return (
        <div className="body-part">
            <div className="search-bar">
                <input type="text" placeholder="Search for restaurants, dishes, or cuisines" />
                <button type="button">Search</button>
            </div>
            <div className="restaurant-container">
                {ResDatalist.map((restaurant, index) => {
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
const  AppHeader = () => {
    return (
        <div className="header">
            <div className="logo">
              <img src="https://up.yimg.com/ib/th?id=OIP.0EDUVYFdatzqZinpYAmpDgHaHa&pid=Api&rs=1&c=1&qlt=95&w=96&h=96" alt="App Logo" className="app-logo" />
            </div>
            
            <nav className="nav bar navbar-expand-lg navbar-light bg-light">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}
const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
            <p>123 Main St, City, Country</p>
            <p>Contact: (123) 456-7890</p>
        </div>
    );
}
const Appdata = () => {
    return (
        <div className="app-data">
            <AppHeader />
            <BodyPart ResDatalist = {resDatalist}/>
            <Footer/>
            
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appdata />);