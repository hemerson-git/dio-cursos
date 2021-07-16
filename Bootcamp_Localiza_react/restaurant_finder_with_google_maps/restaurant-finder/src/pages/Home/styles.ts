import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  max-width: 35%;
  height: 100vh;
  overflow-y: scroll;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
  padding: 1rem;
`;
