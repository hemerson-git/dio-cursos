// @ts-nocheck
import styled, { keyframes } from "styled-components";

export const KeyFrameLoading = keyframes`
  o% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;

export const LoadingSkeleton = styled.div`
  background-color: gray;
  border-radius: 0.5rem;
  margin-bottom: 10px;
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`;
