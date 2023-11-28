import { useEffect, useState } from "react";
import RestCardComponent from "./RestaurantCard";
import { ShimmerComponent } from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_URL } from "../utils/constants";

const BodyComponent = () => {
    const [ restaurantList, setRestaurantList ] = useState([]);
    const [ filteredRestaurantList, setFilteredRestaurantList ] = useState([]);
    const [ searchTxt, setSearchTxt ] = useState("");

    useEffect( () => { fetchData() },[]);

    const fetchData = async () => {
        const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await apiData.json();
        const apiResList = jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(jsonData);
        setRestaurantList(apiResList);
        setFilteredRestaurantList(apiResList);
    }

    const filterRestaurant = () => {
        const topRatedList = restaurantList.filter( (res) => res.info.avgRating >= 4 );
        setFilteredRestaurantList(topRatedList);
    }

    const searchRes = () => {
        const filterList = restaurantList.filter( (res) => res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
        setFilteredRestaurantList(filterList);
    }

    return (restaurantList.length === 0) ? <ShimmerComponent/> : (
        <div className="body">
            <div className="filter-container">
                <div className="search">
                    <input type="text" value={searchTxt}  onChange={(e)=>{setSearchTxt(e.target.value)}} />
                    <button onClick={searchRes}>Search</button>
                </div>
                <button className="filter-btn" onClick={filterRestaurant}>Filter</button>
            </div>
            <div className="rest-container">
                { filteredRestaurantList.map( (restaurant) => {
                    return <Link to={'/restaurant/'+restaurant.info.id}><RestCardComponent key={restaurant.info.id} resData={restaurant} /></Link>
                })}
            </div>
        </div>
    )
};

export default BodyComponent;