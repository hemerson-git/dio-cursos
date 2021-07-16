import { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';
import { MdSearch } from 'react-icons/md';

import { Container, Search, Logo, Wrapper, Map, CarouselTitle } from "./styles";
import logo from "../../assets/logo.svg";

function Home() {
  const [search, setSearch] = useState('');
  
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo}/>

          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MdSearch size={24}/>}
          >
            <Input
              value={search}
              inputType="input"
              //@ts-ignore
              onChange={e => setSearch(e.currentTarget.value)}
            />
          </TextField>
        </Search>

        <CarouselTitle>
          Na Sua Área
        </CarouselTitle>
      </Container>

      <Map>

      </Map>
    </Wrapper>
  );
}

export default Home;
