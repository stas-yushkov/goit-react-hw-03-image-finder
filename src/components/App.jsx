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

  // useEffect(() => {
  //   // console.log(imagesData);
  //   // setImagesData(getImages());

  //   return () => {
  //     setImagesData(initialData);
  //   };
  // }, [imagesData]);

  useEffect(() => {
    // setPage(1);
    // setImagesData({});
    // setQuery('');
    // console.log('eff');
    // const { data } = getImages();
    // setImagesData(data);
    // console.log(data, '--data');
    // getImages('cat dog')
    //   .then(res => {
    //     // console.log(res, '--res');
    //     setImagesData(res?.data);
    //     // console.log(res?.data.totalHits, '-- res?.data.totalHits');
    //     // toast(res?.data.totalHits);
    //   })
    //   .catch(err => toast(err));
    // return () => {
    //   setImagesData(initialData);
    // };
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);

    //fetchData()
    // setImagesData(resFromFetch)
    // setIsLoading(false)

    getImages(query, { page })
      .then(res => {
        console.log(res, '----res');
        // setImagesList([...imagesList, ...res?.hits]);
        setImagesList([...imagesList, ...res?.hits]);
        if (res?.totalHits === 0) {
          toast.warn('There are no images for this query');
          setIsButtonVisible(false);
        }

        setIsButtonVisible(res?.totalHits > API_PER_PAGE * page);
      })
      .catch(err => toast(err))
      .finally(() => setIsLoading(false));
    // window.scrollTo('top');
  }, [query, page]); // I dont want to add imagesList in dependencies

  return (
    <AppWrapper>
      <Searchbar onSearch={handleSearch} />
      {imagesList.length !== 0 && (
        <ImageGallery imgList={imagesList} handleOpenLargeImage={openImg} />
      )}
      {isLoading && <Loader />}
      {isButtonVisible && (
        <Button
          onClick={() => {
            console.log('btn clcked');
            setPage(page + 1);
          }}
        >
          Load more
        </Button>
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
