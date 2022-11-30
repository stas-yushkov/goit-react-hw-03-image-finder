import axios from 'axios';

import { API_PER_PAGE } from 'constants';
const BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '22654483-4e0bcca85732e009257bb92c7';

export const getImages = async (query, newParams = {}) => {
  let response = null;
  const q = query
    ? query?.split(' ')?.filter(word => word !== '').join('+')
    : null;

  try {
    response = await axios.get(BASE_URL, {
      params: {
        key: PIXABAY_API_KEY,
        per_page: API_PER_PAGE,
        q,
        ...newParams
      }
    })
  } catch (error) {
    console.error(error);
  }

  return response.data;
}
