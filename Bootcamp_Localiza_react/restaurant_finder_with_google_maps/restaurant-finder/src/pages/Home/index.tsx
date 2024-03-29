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
import Loader from "../../components/Loader";
import Skeleton from "../../components/Skeleton";

type RestaurantProps = {
  place_id: string;
  name: string;
  photo: string;
  rating: number;
  address: string;
  formatted_address: string;
  formatted_phone_number: string;
  opening_hours: {
    open_now: boolean;
  };

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
          {restaurants.length ? (
            <>
              <CarouselContainer>
                <CarouselTitle>Na Sua Área</CarouselTitle>

                <Slider {...settings}>
                  {restaurants.map((restaurant) => (
                    <ImageCard
                      key={restaurant.place_id}
                      src={
                        restaurant?.photos[0].getUrl() || restaurantPlaceholder
                      }
                      title={restaurant.name}
                    />
                  ))}
                </Slider>
              </CarouselContainer>
            </>
          ) : (
            <Loader />
          )}
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
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalText>{restaurantSelected?.formatted_phone_number}</ModalText>
            <ModalText>{restaurantSelected?.formatted_address}</ModalText>
            <ModalText>
              {restaurantSelected?.opening_hours.open_now
                ? "Aberto Agora"
                : "Fechado"}
            </ModalText>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
}

export default Home;
