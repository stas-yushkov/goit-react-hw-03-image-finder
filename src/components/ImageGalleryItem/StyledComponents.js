import styled from 'styled-components';

import { colors } from 'constants/colors';

export const ImageGalleryItemWrapper = styled.div`
  //
`;

export const ImageGalleryItemImage = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 2px;
  box-shadow: ${colors.imageShadow};
  
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
