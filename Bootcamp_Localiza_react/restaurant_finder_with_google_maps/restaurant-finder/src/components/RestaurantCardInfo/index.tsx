//@ts-ignore
import ReactStars from "react-rating-stars-component";
import {
  Address,
  Restaurant,
  RestaurantImage,
  RestaurantMeta,
  RestaurantName,
} from "./styles";

import restaurant from "../../assets/restaurante-fake.png";

function RestaurantCardInfo() {
  return (
    <Restaurant>
      <RestaurantMeta>
        <RestaurantName>Nome do Restaurante</RestaurantName>
        <ReactStars count={5} value={4} isHalf activeColor="#e7711c" />
        <Address>Rua lorem ipsum, 30 - Dolor Sit Ame</Address>
      </RestaurantMeta>

      <RestaurantImage src={restaurant} />
    </Restaurant>
  );
}

export default RestaurantCardInfo;
