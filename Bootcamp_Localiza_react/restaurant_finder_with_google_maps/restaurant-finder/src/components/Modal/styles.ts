import styled from "styled-components";

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(5px);
  background-color: ${(props) => props.theme.colors.overlay};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 144px);
  width: 500px;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.cardBackground};
  box-shadow: ${(props) => props.theme.shadow.modal};
  border-radius: 0.5rem;
`;
