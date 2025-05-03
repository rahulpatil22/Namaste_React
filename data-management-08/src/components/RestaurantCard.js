import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { restData } = props;

  const {loggedInUser} = useContext(UserContext)


  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    restData?.info;

  return (
    <div className="m-4 p-4 w-[345px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="rest-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>

      <h4>Rating: {avgRating}</h4>
      <h4> {costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>User:{loggedInUser}</h4>
    </div>
  );
};

//Higher Order Component

// Input - Restaurant Card , Output - RestuarantCard Promoted  withPromotedLable is function
// component is function which return piece of jsx- this jsx basically a enhanced component

export const withDiscountOffer = (RestaurantCard) => {
  //this is new component i am returning
  return (props) => {
  

    return (
      <div>
       
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
