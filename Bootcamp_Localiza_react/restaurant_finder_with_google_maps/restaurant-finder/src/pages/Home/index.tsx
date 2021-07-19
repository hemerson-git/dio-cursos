import { useState } from "react";

import TextField, { Input } from "@material/react-text-field";
import Slider from "react-slick";
import { MdSearch } from "react-icons/md";

import { Container, Search, Logo, Wrapper, Map, CarouselTitle } from "./styles";
import logo from "../../assets/logo.svg";
import restaurant from "../../assets/restaurante-fake.png";
import ImageCard from "../../components/ImageCard";

function Home() {
  const [search, setSearch] = useState("");

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    centerMode: true,
    centerPadding: "75px",
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    margin: 4,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "70px",
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
        },
      },
    ],
  };

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
        </Search>

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
      </Container>

      <Map></Map>
    </Wrapper>
  );
}

export default Home;
