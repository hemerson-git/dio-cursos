import { useState } from "react";

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

function Home() {
  const [search, setSearch] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);

  function handleCloseModal() {
    setIsModalOpened(false);
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

      <Map />

      <Modal isOpen={isModalOpened} onClose={handleCloseModal}>
        <h1>Hello World</h1>
      </Modal>
    </Wrapper>
  );
}

export default Home;
