import styled from "styled-components";

export const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
`;

export const CardImage = styled.img`
  object-fit: cover;
`;

export const Title = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.cardBackground};
`;
