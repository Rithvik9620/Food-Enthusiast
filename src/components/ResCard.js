import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:shadow-2xl">
      <img
        className="rounded-lg w-[192px] h-[150px] object-cover"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
