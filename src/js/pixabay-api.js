import { API } from './constants.js';

export const fetchImages = async (searchQuery, page) => {

  const params = new URLSearchParams({
    key: API.PIXABAY.KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(API.PIXABAY.PATH + '?' + params.toString());
};