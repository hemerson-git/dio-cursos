import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
`

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  max-width: 45%;
  height: 100vh;
  overflow-y: scroll;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  padding: 1rem;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
`;

export const Map = styled.div`
  background-color: red;
  width: 500px;
  max-width: 55%;
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.color };
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.7rem;
  margin: 1rem 0;
  padding: 0 1rem;
`;
