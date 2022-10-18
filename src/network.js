import axios from 'axios';

const handleAxiosError = (err) => {
  if (err.response) {
    return {
      ...err.response,
      details:
        'The request was made but the server responded with a status code that falls outside 2xx range',
    };
  }

  if (err.request) {
    return {
      ...err.request,
      details: 'The request was made but no response was received',
    };
  }

  return err;
};

const options = { headers: { Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}` } };

const fetcher = (url) =>
  axios
    .get(url, options)
    .then((res) => res.data)
    .catch((err) => handleAxiosError(err));

export { fetcher, handleAxiosError };
