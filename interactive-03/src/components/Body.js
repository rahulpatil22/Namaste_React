import RestaurantCard from "./RestaurantCard";
import restList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {


    //passing mock data in useState
    // it is array destructuring 
 const [listOfRestaurants,setlistOfRestaurants]= useState(restList)
     
  //Local State Variable - passing array of data
//  const [listOfRestaurants , setlistOfRestaurants] = useState([
//     {
//         data: {
//           id: "656392",
//           name: "Subway",
//           cloudinaryImageId:
//             "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ccb97e93-5b1a-4e18-9dd7-3f635e2d5e94_656392.JPG",
//           costForTwo: "₹350 for two",
//           cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
//           avgRating: "3.8",
//           deliveryTime: 25,
//         },
//       },
//       {
//         data: {
//           id: "656395",
//           name: "KFC",
//           cloudinaryImageId:
//             "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ccb97e93-5b1a-4e18-9dd7-3f635e2d5e94_656392.JPG",
//           costForTwo: "₹450 for two",
//           cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
//           avgRating: "4.6",
  
//           deliveryTime: 25,
//         },
//       },
  
//       {
//           data: {
//             id: "656399",
//             name: "MacD",
//             cloudinaryImageId:
//               "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ccb97e93-5b1a-4e18-9dd7-3f635e2d5e94_656392.JPG",
//             costForTwo: "₹450 for two",
//             cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
//             avgRating: "4.8",
    
//             deliveryTime: 25,
//           },
//         },
//  ])

 
 //normal js variable 
//   let listOfRestaurantsJs = [
//     {
//       data: {
//         id: "656392",
//         name: "Subway",
//         cloudinaryImageId:
//           "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ccb97e93-5b1a-4e18-9dd7-3f635e2d5e94_656392.JPG",
//         costForTwo: "₹350 for two",
//         cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
//         avgRating: "3.8",

//         deliveryTime: 25,
//       },
//     },

//     {
//       data: {
//         id: "656395",
//         name: "KFC",
//         cloudinaryImageId:
//           "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ccb97e93-5b1a-4e18-9dd7-3f635e2d5e94_656392.JPG",
//         costForTwo: "₹450 for two",
//         cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
//         avgRating: "4.6",

//         deliveryTime: 25,
//       },
//     },

//     {
//         data: {
//           id: "656399",
//           name: "MacD",
//           cloudinaryImageId:
//             "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ccb97e93-5b1a-4e18-9dd7-3f635e2d5e94_656392.JPG",
//           costForTwo: "₹450 for two",
//           cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
//           avgRating: "4.8",
  
//           deliveryTime: 25,
//         },
//       },
//   ];

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
                         

         //filter logic here
         const filteredList = listOfRestaurants.filter(
            (res)=>res.data.avgRating > 4.5 
         );
         setlistOfRestaurants(filteredList); 
        
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
