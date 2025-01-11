const API_KEY = 't9GP8YYWgjwDdyhC6N43S3W9ypACGBUr';
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed';

export const fetchArticles = async (period: number = 1) => {
  const response = await fetch(
    `${BASE_URL}/${period}.json?api-key=${API_KEY}`
  ).then((res) => res.json());
  return response;
};
