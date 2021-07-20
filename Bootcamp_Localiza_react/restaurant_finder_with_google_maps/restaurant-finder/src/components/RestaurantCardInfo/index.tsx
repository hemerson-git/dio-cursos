import { Address, Restaurant, RestaurantMeta, RestaurantName } from "./styles";

function RestaurantCardInfo() {
  return (
    <Restaurant>
      <RestaurantMeta>
        <RestaurantName>Nome do Restaurante</RestaurantName>
        <span>Avaliações</span>
        <Address>Rua lorem ipsum, 30 - Dolor Sit Amet</Address>
      </RestaurantMeta>
    </Restaurant>
  );
}

export default RestaurantCardInfo;
