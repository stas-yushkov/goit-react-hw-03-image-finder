import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';

import { IconButton } from '../IconButton/IconButton';

import { CloseButtonWrapper, Overlay, StyledModal } from './StyledComponents';

import { colors } from 'constants/colors';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    const onEscape = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscape);

    return () => {
      window.removeEventListener('keydown', onEscape);
    };
  });

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <StyledModal>
        <CloseButtonWrapper>
          <IconButton
            bgColor={colors.warn}
            color="black"
            onClick={() => closeModal()}
            aria-label="Close modal"
          >
            <ImCross size="1em" />
          </IconButton>
        </CloseButtonWrapper>
        {children}
      </StyledModal>
    </Overlay>,
    modalRoot
  );
};
