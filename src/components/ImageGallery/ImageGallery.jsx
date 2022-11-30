import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrapper } from './StyledComponents';

export const ImageGallery = ({ imgList, handleOpenLargeImage }) => {
  return (
    <ImageGalleryWrapper>
      {imgList?.length > 0 &&
        imgList.map(item => (
          <ImageGalleryItem
            key={item.id}
            img={item.webformatURL}
            onImageClick={() => {
              handleOpenLargeImage(item.id);
            }}
          />
        ))}
    </ImageGalleryWrapper>
  );
};

ImageGallery.propTypes = {
  imgList: PropTypes.arrayOf(
    PropTypes.shape({
      collections: PropTypes.number,
      comments: PropTypes.number,
      downloads: PropTypes.number,
      id: PropTypes.number,
      imageHeight: PropTypes.number,
      imageSize: PropTypes.number,
      imageWidth: PropTypes.number,
      largeImageURL: PropTypes.string,
      likes: PropTypes.number,
      pageURL: PropTypes.string,
      previewHeight: PropTypes.number,
      previewURL: PropTypes.string,
      previewWidth: PropTypes.number,
      tags: PropTypes.string,
      type: PropTypes.string,
      user: PropTypes.string,
      userImageURL: PropTypes.string,
      user_id: PropTypes.number,
      views: PropTypes.number,
      webformatHeight: PropTypes.number,
      webformatURL: PropTypes.string,
      webformatWidth: PropTypes.number,
    })
  ),
  handleOpenLargeImage: PropTypes.func.isRequired,
};
