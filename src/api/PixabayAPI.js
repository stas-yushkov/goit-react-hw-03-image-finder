import axios from 'axios';

import { API_PER_PAGE } from 'constants';
//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// page дорівнює 1
// 12 об'єктів, встановлено в параметрі per_page

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна

// const BASE_URL = 'https://pixabay.com/api/?key=22654483-4e0bcca85732e009257bb92c7&q=yellow+flowers&image_type=photo&pretty=true'
const BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '22654483-4e0bcca85732e009257bb92c7';

//https://pixabay.com/api/?key=22654483-4e0bcca85732e009257bb92c7&q=yellow+flowers&image_type=photo

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

// var API_KEY = '22654483-4e0bcca85732e009257bb92c7';
// var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('red roses');
// $.getJSON(URL, function (data) {
//   if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function (i, hit) { console.log(hit.pageURL); });
//   else
//     console.log('No hits');
// });


// Parameters
// key(required)	str	Your API key: 22654483 - 4e0bcca85732e009257bb92c7
// q	str	A URL encoded search term.If omitted, all images are returned.This value may not exceed 100 characters.
//   Example: "yellow+flower"
// lang	str	Language code of the language to be searched in.
// Accepted values: cs, da, de, en, es, fr, id, it, hu, nl, no, pl, pt, ro, sk, fi, sv, tr, vi, th, bg, ru, el, ja, ko, zh
// Default: "en"
// id	str	Retrieve individual images by ID.
// image_type	str	Filter results by image type.
// Accepted values: "all", "photo", "illustration", "vector"
// Default: "all"
// orientation	str	Whether an image is wider than it is tall, or taller than it is wide.
// Accepted values: "all", "horizontal", "vertical"
// Default: "all"
// category	str	Filter results by category.
// Accepted values: backgrounds, fashion, nature, science, education, feelings, health, people, religion, places, animals, industry, computer, food, sports, transportation, travel, buildings, business, music
// min_width	int	Minimum image width.
//   Default: "0"
// min_height	int	Minimum image height.
//   Default: "0"
// colors	str	Filter images by color properties.A comma separated list of values may be used to select multiple properties.
// Accepted values: "grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"
// editors_choice	bool	Select images that have received an Editor's Choice award.
// Accepted values: "true", "false"
// Default: "false"
// safesearch	bool	A flag indicating that only images suitable for all ages should be returned.
// Accepted values: "true", "false"
// Default: "false"
// order	str	How the results should be ordered.
// Accepted values: "popular", "latest"
// Default: "popular"
// page	int	Returned search results are paginated.Use this parameter to select the page number.
//   Default: 1
// per_page	int	Determine the number of results per page.
// Accepted values: 3 - 200
// Default: 20
// callback	string	JSONP callback function name
// pretty	bool	Indent JSON output.This option should not be used in production.
// Accepted values: "true", "false"
// Default: "false"