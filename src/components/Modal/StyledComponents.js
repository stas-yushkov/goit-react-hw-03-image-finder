import styled from 'styled-components';

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
  background-color: rgba(0, 0, 0, 0.8);
`;

export const StyledModal = styled.div`
  position: relative;
  min-height: 100px;
  min-width: 100px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
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
