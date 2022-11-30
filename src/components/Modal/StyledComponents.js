import styled from 'styled-components';

import { colors } from 'constants/colors';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.modalOverlay};
`;

export const StyledModal = styled.div`
  position: relative;
  min-height: 100px;
  min-width: 100px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  box-shadow: ${colors.modalShadow};
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  animation-duration: 1s;
  animation-name: show;

  @keyframes show {
    from {
      opacity: 0;
      transform:  rotate(0);
    }

    50% {
      opacity: 0;
      transform:  rotate(0);
    }
    
    to {
      opacity: 1;
      transform:  rotate(0.25turn);
    }
  }
`;
