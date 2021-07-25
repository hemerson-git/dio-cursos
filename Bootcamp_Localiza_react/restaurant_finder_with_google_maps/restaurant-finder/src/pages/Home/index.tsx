import { KeyboardEventHandler, useState } from "react";

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
} from "./styles";

import { settings } from "../../utils/slickSettings.js";
import logo from "../../assets/logo.svg";
import restaurant from "../../assets/restaurante-fake.png";
import { KeyboardEvent } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [query, setQuery] = useState("");

  function handleCloseModal() {
    setIsModalOpened(false);
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      setQuery(search);
    }
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
              <ImageCard src={restaurant} title="Nome do Restaurante" />
              <ImageCard src={restaurant} title="Nome do Restaurante" />
              <ImageCard src={restaurant} title="Nome do Restaurante" />
              <ImageCard src={restaurant} title="Nome do Restaurante" />
              <ImageCard src={restaurant} title="Nome do Restaurante" />
              <ImageCard src={restaurant} title="Nome do Restaurante" />
              <ImageCard src={restaurant} title="Nome do Restaurante" />
              <ImageCard src={restaurant} title="Nome do Restaurante" />
            </Slider>
          </CarouselContainer>
        </Search>

        <RestaurantCardInfo />
      </Container>

      <Map query={query} />

      <Modal isOpen={isModalOpened} onClose={handleCloseModal}>
        <h1>Hello World</h1>
      </Modal>
    </Wrapper>
  );
}

export default Home;
