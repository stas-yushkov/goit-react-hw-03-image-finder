import {
  ImageGalleryItemImage,
  ImageGalleryItemWrapper,
} from './StyledComponents';

export const ImageGalleryItem = ({ img, onImageClick }) => {
  return (
    <ImageGalleryItemWrapper>
      <ImageGalleryItemImage onClick={onImageClick} src={img} />
    </ImageGalleryItemWrapper>
  );
};
