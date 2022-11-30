import { getImages } from 'api/PixabayAPI';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

import { AppWrapper } from './StyledComponents';

import { API_PER_PAGE } from 'constants';

// TODO: add https://www.npmjs.com/package/body-scroll-lock
// TODO: add autoLoadMore without button

export const App = () => {
  const [imagesList, setImagesList] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = newQuery => {
    if (newQuery === query) {
      toast.warn('This is the same query');
      return;
    }
    setPage(1);
    setQuery(newQuery);
    setImagesList([]);
  };

  const openImg = imgID => {
    setIsModalOpen(true);
    setLargeImageURL(imagesList.find(({ id }) => id === imgID).largeImageURL);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);

    getImages(query, { page })
      .then(res => {
        setImagesList(prevList => [...prevList, ...res?.hits]);
        if (res?.totalHits === 0) {
          toast.warn('There are no images for this query');
          setIsButtonVisible(false);
        }

        setIsButtonVisible(res?.totalHits > API_PER_PAGE * page);
      })
      .catch(err => toast(err))
      .finally(() => setIsLoading(false));
    // TODO:  window.scrollTo('new line of images');
    // TODO:  window.scrollTo('to top on new query');
  }, [query, page]);

  return (
    <AppWrapper>
      <Searchbar onSearch={handleSearch} />
      {imagesList.length !== 0 && (
        <ImageGallery imgList={imagesList} handleOpenLargeImage={openImg} />
      )}
      {isLoading && <Loader />}
      {isButtonVisible && (
        <Button onClick={() => setPage(page + 1)}>Load more</Button>
      )}
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)}>
          {<img src={largeImageURL} alt="" />}
        </Modal>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        type="warning"
      />
    </AppWrapper>
  );
};
