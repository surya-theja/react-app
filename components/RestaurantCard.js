import { IMG_URL } from "../utils/constants";

const RestCardComponent = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRatingString, sla , cloudinaryImageId  } = resData.info;
    return (
        <div className="rest-card">
            <img alt="rest-img" className="rest-img" src={IMG_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} Star</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
};

export default RestCardComponent;