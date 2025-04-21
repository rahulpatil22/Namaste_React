// import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [restInfo, setRestInfo] = useState(null);

  const { resID } = useParams();
  // we are using custome hook rather than useState Hook here
  const restInfo = useRestaurantMenu(resID);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resID);

  //   const json = await data.json();

  //   setRestInfo(json.data);
  // };

  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    restInfo?.cards[2]?.card?.card?.info || {};

  const cards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCards =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines && cuisines.length > 0
          ? cuisines.join(", ")
          : "Cuisines not available"}{" "}
        - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
