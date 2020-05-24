import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchAPI = async (term) => {
    try {
      console.log('I\'m there!');
      const response = await yelp.get('/search',
          {
            params: {
              limit: 50,
              term: term,
              location: 'toronto',
            },
          });
      setErrorMessage('');
      setBusinesses(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong please check internet connection and retry later');
    }
  };

  useEffect(() => {
    searchAPI('pasta');
  },
  []);

  return [searchAPI, businesses, errorMessage];
};
