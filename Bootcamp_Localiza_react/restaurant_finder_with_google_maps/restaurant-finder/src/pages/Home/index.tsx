import { useState } from "react";

import { useSelector } from "react-redux";
import TextField, { Input } from "@material/react-text-field";
import Slider from "react-slick";
import { MdSearch } from "react-icons/md";

import ImageCard from "../../components/ImageCard";
import RestaurantCardInfo from "../../components/RestaurantCardInfo";
import Modal from "../../components/Modal";
import Map from "../../components/Map";

import {
  Container,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
  CarouselContainer,
  ModalTitle,
  ModalText,
} from "./styles";

import { settings } from "../../utils/slickSettings.js";
import logo from "../../assets/logo.svg";
import restaurantPlaceholder from "../../assets/restaurante-fake.png";
import { KeyboardEvent } from "react";

type RestaurantProps = {
  place_id: string;
  name: string;
  photo: string;
  rating: number;
  address: string;
  formatted_address: string;
  formatted_phone_number: string;
  photos: [
    {
      getUrl: () => string;
    }
  ];
};

type RestaurantsProps = {
  restaurants: RestaurantProps[];
  restaurantSelected: RestaurantProps;
  onClick: () => void;
};

function Home() {
  const [search, setSearch] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [placeId, setPlaceId] = useState("");
  const [query, setQuery] = useState("");

  const { restaurants, restaurantSelected } = useSelector(
    // @ts-ignore
    (state) => state.restaurants
  ) as RestaurantsProps;

  function handleCloseModal() {
    setIsModalOpened(false);
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      setQuery(search);
    }
  }

  function handleOpenModal(placeId: string) {
    setPlaceId(placeId);
    setIsModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} />

          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MdSearch size={24} />}
          >
            <Input
              value={search}
              inputType="input"
              //@ts-ignore
              onChange={(e) => setSearch(e.currentTarget.value)}
              onKeyPress={handleKeyPress}
            />
          </TextField>

          <CarouselContainer>
            <CarouselTitle>Na Sua Área</CarouselTitle>

            <Slider {...settings}>
              {restaurants.map((restaurant) => (
                <ImageCard
                  key={restaurant.place_id}
                  src={restaurant?.photos[0].getUrl() || restaurantPlaceholder}
                  title={restaurant.name}
                />
              ))}
            </Slider>
          </CarouselContainer>
        </Search>

        {restaurants.map((restaurant: RestaurantProps) => (
          <RestaurantCardInfo
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>

      <Map query={query} placeId={placeId} />

      <Modal isOpen={isModalOpened} onClose={handleCloseModal}>
        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalText>{restaurantSelected?.formatted_phone_number}</ModalText>
        <ModalText>{restaurantSelected?.formatted_address}</ModalText>
      </Modal>
    </Wrapper>
  );
}

export default Home;
