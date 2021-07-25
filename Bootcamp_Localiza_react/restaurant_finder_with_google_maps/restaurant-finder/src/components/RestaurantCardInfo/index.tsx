//@ts-ignore
import ReactStars from "react-rating-stars-component";
import {
  Address,
  Restaurant,
  RestaurantImage,
  RestaurantMeta,
  RestaurantName,
} from "./styles";

type RestaurantProps = {
  name: string;
  rating: number;
  address: string;
  formatted_address: string;
  photos: [
    {
      getUrl: () => string;
    }
  ];
};

type RestaurantCardProps = {
  restaurant: RestaurantProps;
};

function RestaurantCardInfo({ restaurant }: RestaurantCardProps) {
  return (
    <Restaurant>
      <RestaurantMeta>
        <RestaurantName>{restaurant.name}</RestaurantName>
        <ReactStars
          count={5}
          value={restaurant.rating}
          isHalf
          activeColor="#e7711c"
        />
        <Address>{restaurant.address || restaurant.formatted_address}</Address>
      </RestaurantMeta>

      <RestaurantImage src={restaurant?.photos[0].getUrl() || ""} />
    </Restaurant>
  );
}

export default RestaurantCardInfo;
