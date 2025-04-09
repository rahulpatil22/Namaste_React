import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - search comp
 * - RestaurantContainer
 *   -RestaurantCard
 * Footer
 * - copyright
 * -link
 * -address
 * -contact
 *
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAwFBMVEXy8vLyGgX0vwfzFAXpAADvIwzuAADxAADlAADvNAnx8/Hy8/bxsQD3pBH1///z8fPznA3wrQj0LQr0hxX05+XxsLDoVVHz+Pjz1dLnPzzuYhfrUxT0fxjvpwvmY2Dx3dvmIhzojInlLy3sl5PqXVnqurbx47nz68zrtAD0zsjwwEH08ebcAADseXjiQUDux8XtQAzvjxDsHRbpo6H17tjsw1Ht1JTv1ojtx2T14Kzz0XnuuyvvhYPz4aPmbWv0yF8Qs4oqAAAELElEQVR4nO2abW/iOBCAHZzaWTslRxvi0C2E1yRNCvR4h7Lw///VjbOEQrt7X05Zo9M8UglBSDwaj2dsp4QgCIIgCIIgCIIgCIIgCIIgCIIgyH9GqXq9+NM3wrRNgSJhcxxMJsG4GQll2qZA1qeHGWMcYKx7mNZNCwEq6jBuWdTSUMrZITIcLI+osMWtK1grNGylRvYnJ8viztSolYr6X5zAqm90BP3g5MQo5JNF2ckq8Mw5qebJwnp649+/87en063dVDrh/jxQI/3+adI9uM9O+95+bDz8lKIt30wJhZk3OgWKPjSenfu/7Md2KcVGprJKjMssByn7UsriY2Go23gt+iHlXEu1zCgR4Tu/laKOoaQikWP9TspyIiOrBSHDUupLooOUqV5zjhT91n58bd+//n0ZKWnESfizc061a25ac2sfOTXzzTgJEpwb3+N9O03b98/n9heYqehgtS+lKLPfarU7u+w6FusZSilPTe+scgDpN5A631h3sHox1JRV5zx+V1IW75hbu6jQ+XWkjBWEgnP3u5LiY4NKRERlVbiUojOzq3RVhupSio+NbrM84nfpZynaNdWMS0SPf5biPWVqMVVKnZbEH1K07xPPcKjUgF1JUTa4geMEf8KvpCY6o0yfvKj5lRSf30CgoC/r04RSirdMB+knxZa0lIJtqMHd8QeCDHkpxYc3oURIsSml9OmJUsqNbUK/oPQSlOqMCm7GiaipTYvCaU+l6bp5RpBDURb4wXiBukCFto6UHd7G1CvwSP3AdKBu4WT4jKfCLqXd8IYGT6N6jPXELaVUQbNp2uAXKGM7vX/npgYPcsn7/Mmfi5pHZAG8K14BuIKRvpVXHkIBQo+qqrj1yEWsyaV+k0MSSRFvE9BK4jjJyxMpv3jgEE6nsP3zpvpS6bjKpatZkXXquulKkSSD202e60u6PX0rmEVEvTjMtid+k9mMdSo9rAKp4263SWI33R3dNAaZbPcOVll6BK9Yxwq6M2yy4LW1b/Fek0/2/Wr3EiC1TRKRw0XKlbvZuhsh8/c0zrJc/nCz4ksBZ06kXux93e925mxej+ygyv6jhy91IUBZrmWWu8ZWCrlxf2gpkaaQVhCizp4P6i/2cLRnhyY/jMZ8XHGkNpvdAkZrIWXiHtfuGiZh5haRStx3/dtDPhyzrg+DyFg3auqHuEFUZaaDVCKIFLvGZpEs3VXsvseLlZsusiyOl2CoFzH266vD5i/2ZDAP63PeGcz9SouCXDYWkMwwcnoSLnO51ldI+He3oWchfGXIRkqETncEOQUlas4G9arr1Oq4kELXq3WWrcFPbJfZMZb5erk8rvQYibme/6K3jzr6mZ8IO/rZbbX956KOe0UFl1Lpj8pCL4jSE03of50oVqGi6jghCIIgCIIgCIIgCIIgCIIgCIIg/0P+AX0RX+029ANlAAAAAElFTkSuQmCC"
        ></img>
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

// const styleCard = {
//   backgroundColor:"#f0f0f0"
// }

const restList = [
  {
    data: {
      id: "656392",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ccb97e93-5b1a-4e18-9dd7-3f635e2d5e94_656392.JPG",
      locality: "1st Block",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "3.7K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/bolt%206.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/bolt%206.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountdataV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationdata: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1854099b-dbca-45b4-a729-9b372fc36d73",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
      type: "WEBLINK",
    },
  },

  {
    data: {
      id: "307",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/b61a8555-13c8-4034-816c-5afc7e8a5b31_307.jpg",
      locality: "BTM Layout",
      areaName: "BTM Layout",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      avgRating: 4.5,
      parentId: "22",
      avgRatingString: "4.5",
      totalRatingsString: "79K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-09 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountdataV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationdata: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "11K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b39ed85b-dcbb-4faa-9ad8-21b59056c080",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-btm-layout-rest307",
      type: "WEBLINK",
    },
  },
  {
    data: {
      id: "18973",
      name: "Nandhana Palace",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
      avgRating: 4.4,
      parentId: "2120",
      avgRatingString: "4.4",
      totalRatingsString: "38K+",
      sla: {},
      availability: {
        nextCloseTime: "2025-04-10 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountdataV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationdata: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "8.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b39ed85b-dcbb-4faa-9ad8-21b59056c080",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/nandhana-palace-koramangala-rest18973",
      type: "WEBLINK",
    },
  },
  {
    data: {
      id: "671928",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
      locality: "7th Block",
      areaName: "Koramangla",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "4.3K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountdataV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationdata: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b39ed85b-dcbb-4faa-9ad8-21b59056c080",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
      type: "WEBLINK",
    },
  },
  {
    data: {
      id: "23678",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/9cf0f783-d73f-4cb8-993e-8031bf95f039_23678.jpg",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "64K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 02:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountdataV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationdata: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b39ed85b-dcbb-4faa-9ad8-21b59056c080",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
      type: "WEBLINK",
    },
  },
  {
    data: {
      id: "5934",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/6c37bd85-e460-4f35-9a27-ea97d88f4e3a_5934.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "101K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 06:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountdataV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationdata: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "4.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b39ed85b-dcbb-4faa-9ad8-21b59056c080",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
      type: "WEBLINK",
    },
  },
  {
    data: {
      id: "10820",
      name: "California Burrito",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/0e28a355-210c-4fe3-9d60-596c7fc89ec6_10820.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
        "Beverages",
        "Snacks",
        "Desserts",
        "Fast Food",
      ],
      avgRating: 4.6,
      parentId: "1252",
      avgRatingString: "4.6",
      totalRatingsString: "42K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountdataV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationdata: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "2.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b39ed85b-dcbb-4faa-9ad8-21b59056c080",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/california-burrito-koramangala-rest10820",
      type: "WEBLINK",
    },
  },
  {
    data: {
      id: "139558",
      name: "Dindigul Thalappakatti",
      cloudinaryImageId: "exhzkyd9pjoqlobruy4v",
      locality: "HSR Layout",
      areaName: "HSR Layout",
      costForTwo: "₹650 for two",
      cuisines: [
        "Biryani",
        "Barbecue",
        "South Indian",
        "Chinese",
        "North Indian",
      ],
      avgRating: 4.3,
      parentId: "332",
      avgRatingString: "4.3",
      totalRatingsString: "8.6K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountdataV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationdata: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "6.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b39ed85b-dcbb-4faa-9ad8-21b59056c080",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/dindigul-thalappakatti-hsr-layout-rest139558",
      type: "WEBLINK",
    },
  },
  {
    data: {
      id: "426776",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/6/ef26de8c-72a5-494b-9662-e4c1f51e26bc_426776.jpg",
      locality: "7th Block",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      avgRating: 4.7,
      parentId: "1040",
      avgRatingString: "4.7",
      totalRatingsString: "6.0K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-09 23:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountdataV3: {
        header: "15% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationdata: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b39ed85b-dcbb-4faa-9ad8-21b59056c080",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/theobroma-7th-block-koramangala-rest426776",
      type: "WEBLINK",
    },
  },
  {
    data: {
      id: "289266",
      name: "BOX8 - Desi Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/33040d7e-a691-48b4-8fed-a25ff5b36914_289266.jpg",
      locality: "6TH BLOCK",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
      avgRating: 4.6,
      parentId: "10655",
      avgRatingString: "4.6",
      totalRatingsString: "5.7K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "10-20 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/bolt%206.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/bolt%206.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountdataV3: {
        header: "ITEMS",
        subHeader: "AT ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationdata: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b39ed85b-dcbb-4faa-9ad8-21b59056c080",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/box8-desi-meals-6th-block-koramangala-rest289266",
      type: "WEBLINK",
    },
  },
  {
    data: {
      id: "263485",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_263485.JPG",
      locality: "Kormangala 8th Block",
      areaName: "Kormangala",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "281782",
      avgRatingString: "4.5",
      totalRatingsString: "4.8K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountdataV3: {
        header: "ITEMS",
        subHeader: "AT ₹84",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationdata: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b39ed85b-dcbb-4faa-9ad8-21b59056c080",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-8th-block-kormangala-rest263485",
      type: "WEBLINK",
    },
  },
  
    {
      
      data: {
      id: "65797",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: [
      "American",
      "Snacks",
      "Turkish",
      "Portuguese",
      "Continental"
      ],
      avgRating: 4.5,
      parentId: "371281",
      avgRatingString: "4.5",
      totalRatingsString: "56K+",
      sla: {
      deliveryTime: 23,
      lastMileTravel: 1.4,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "1.4 km",
      iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
      nextCloseTime: "2025-04-10 04:00:00",
      opened: true
      },
      badges: {
      imageBadges: [
      {
      imageId: "Rxawards/_CATEGORY-Burger.png",
      description: "Delivery!"
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
      description: "Delivery!",
      imageId: "Rxawards/_CATEGORY-Burger.png"
      }
      }
      ]
      },
      textBased: { },
      textExtendedBadges: { }
      }
      },
      aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100"
      },
      orderabilityCommunication: {
      title: { },
      subTitle: { },
      message: { },
      customIcon: { }
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
      rating: "4.5",
      ratingCount: "4.7K+"
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
      context: "seo-data-b39ed85b-dcbb-4faa-9ad8-21b59056c080"
      },
      cta: {
      link: "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"

      },
    }
];

const RestaurantCard = (props) => {
  // const {rating,deliveryTime} = props
  const { restData } = props;

  const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla:{deliveryTime},} =restData?.data; //optional chaining
  // destructuring object

  return (
    // <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
    //   <img
    //     alt="rest-logo"
    //     src={
    //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
    //       restData.data.cloudinaryImageId
    //     }
    //   />
    //   {/* <h3>{props.restName}</h3> */}
    //   {/* <h4>{props.cuisine}</h4>
    //   <h4> {rating}</h4>
    //   <h4> {deliveryTime}</h4> */}
    //   <h3>{restData.data.name}</h3>
    //   <h4>{restData.data.cuisines.join(",")}</h4>{" "}
    //   {/* join for separated the comma with array*/}
    //   <h4> {restData.data.avgRating}</h4>
    //   <h4> {restData.data.costForTwo}</h4>
    //   <h4> {restData.data.deliveryTime}</h4>
// </div>


     <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="rest-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      {/* <h3>{props.restName}</h3> */}
      {/* <h4>{props.cuisine}</h4>
      <h4> {rating}</h4>
      <h4> {deliveryTime}</h4> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      {/* join for separated the comma with array*/}
      <h4>Rating: {avgRating}</h4>
      <h4> {costForTwo}</h4>
      <h4>Delivery Time: {deliveryTime} Minuts</h4> 
    </div>



  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {/* <RestaurantCard restName="Jalaram Foods" cuisine="Biryani,North Indian, Asian" rating="4.8" deliveryTime="30 Min"/>
      <RestaurantCard restName="KFC" cuisine="Burger , Fast Food" rating="4.8" deliveryTime="30 Min"/> */}
        {/* <RestaurantCard restData={restList[0]} />
        <RestaurantCard restData={restList[1]} />
        <RestaurantCard restData={restList[2]} />
        <RestaurantCard restData={restList[3]} />
        <RestaurantCard restData={restList[4]} />
        <RestaurantCard restData={restList[5]} />
        <RestaurantCard restData={restList[6]} />
        <RestaurantCard restData={restList[7]} />
        <RestaurantCard restData={restList[8]} />
        <RestaurantCard restData={restList[9]} /> */}
        {/* loop over the array and create this restau card one by one using js map function*/}

        {
          restList.map((restaurant)=>(
            <RestaurantCard 
            key={restaurant.data.id}
            restData={restaurant}/>
          ))
        }
       
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
  
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
