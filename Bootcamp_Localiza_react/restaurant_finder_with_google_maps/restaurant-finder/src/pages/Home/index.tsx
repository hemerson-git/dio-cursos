import { Container, Search } from "./styles";
import logo from "../../assets/logo.svg";

function Home() {
  return (
    <Container>
      <h1>Hello World</h1>

      <Search>
        <img src={logo} alt="Restaurant Finder" />
      </Search>
    </Container>
  );
}

export default Home;
