import styled from "styled-components";

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 4px;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-left: 5px solid transparent;
  transition: border 0.4s ease, background-color 0.4s ease-in-out;

  &:hover {
    border-left: 5px solid ${(props) => props.theme.colors.primary};
    filter: brightness(0.95);
  }
`;

export const RestaurantMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RestaurantName = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.8rem;
  margin-bottom: 12px;
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  line-height: 1.2rem;
  margin-top: 12px;
`;

export const RestaurantImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 0.5rem;
  object-fit: cover;
`;
