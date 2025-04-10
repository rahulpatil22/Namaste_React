import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    // sla: { deliveryTime },
    deliveryTime,
  } = restData?.data;

  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img alt="rest-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>

      <h4>Rating: {avgRating}</h4>
      <h4> {costForTwo}</h4>
      <h4>Delivery Time: {deliveryTime} minuts</h4>
    </div>
  );
};
export default RestaurantCard;
