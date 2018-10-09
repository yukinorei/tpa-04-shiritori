const axios = require('axios');

const kSearchApiUrl = 'https://jisho.org/api/v1/search/words?keyword=';

const search = function(keyword = '') {
  if (!keyword) {
    return new Error('Search requires a keyword.');
  }
  if (typeof keyword !== 'string') {
    return new Error('Search requires a keyword of type string.');
  }

  let query = kSearchApiUrl + keyword;
  query = encodeURI(query);

  // the API gives us an array of results, and the first one is most closely matched with the query
  return axios.get(query)
    .then(resp => resp.data.data[0]);
};

module.exports = {
  search,
};
