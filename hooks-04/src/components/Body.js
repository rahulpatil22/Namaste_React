import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  //Local state variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant,setfilteredRestaurant] = useState([])
  const [searchText ,setSearchText]= useState("")

  console.log("Body get rendered")
  // comp get render ; API call get Made and update the state , again comp re-rendered.

  useEffect(() => {
    fetchData(); 
  }, []);

  // function logic for fetch the data using swiggy API

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/ " +
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    //convert data to JSON
    const json = await data.json();

    //    console.log(json)

    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    //optional chaining
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //    console.log(listOfRestaurants)
  };

  //spinning loader
//   if (listOfRestaurants.length === 0){
//     return <h1>Loading....</h1>
//   }
     
//using shimmer comp 
// this is conditional rendering ->
//   if (listOfRestaurants.length === 0){
//     return <Shimmer/>;
//   }
// below we return same concept using ternary operator ,for single return instead of double return
// if condition satisfied return shimmer otherwise returnn jsx


  return listOfRestaurants.length === 0 ? <Shimmer/>: (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value);}}/>
            {/*while i am typing a word in input box , for each key stroke component get re-rendered */}
            <button onClick={()=>{
            //filer the restaurant cards and update the UI
            //searchText
            console.log(searchText)
          const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
            //now update the UI with filteredRest, comp re-render only with filtered data
            setfilteredRestaurant(filteredRestaurant);

            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            // when i click the btn component get re-render
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurant
          .filter((res) => res?.info?.id)
          .map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} restData={restaurant} />
          ))}
      </div>
    </div>
  );
 };
export default Body;
