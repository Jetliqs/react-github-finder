import axios from 'axios';

export const AxiosF1 = async () => {
  const res = await axios.get('https://httpbin.org/get?answer=42');

  console.log(res.data);
};

export const AxiosF2 = async () => {
  const res = await axios.get('https://httpbin.org/get', {
    headers: {
      'Test-Header': 'test-value',
    },
  });
  console.log(res.data.headers['Test-Header']);
};

// Get the HTTP Response Body with Axios

export const AxiosF3 = async () => {
  const res = await axios.get('https://httpbin.org/get', {
    params: { answer: 42 },
  });

  console.log(res);
  console.log(res.data);
  console.log(res.data instanceof Object);
  console.log(res.constructor.name);
};

// You will often see code that gets the response body directly using Promise chaining.

export const AxiosF4 = async () => {
  const url = 'https://httpbin.org/get?answer=42';
  const data = await axios.get(url).then((res) => res.data);
  console.log(data);
};

//* POST Requests with Axios
export const AxiosP1 = async () => {
  const res = await axios.post('https://httpbin.org/post', {
    hello: 'world',
  });
  console.log(res);
  console.log(res.data);
  console.log(res.data.json);
  console.log(res.data.headers['Content-Type']);
};

//* Handling Errors
export const AxiosP2 = async () => {
  const error = await axios.get('https://httpbin.org/status/404').then(
    () => null,
    (error) => error
  );

  console.log(error.response);
  console.log(error.response.status);
  console.log(error.response.statusText);
};

export const AxiosF5 = async () => {
  const error = await axios
    .get('https://httpbin.org/status/200')
    .then((res) => res.doesNotExist.throwAnError)
    .catch((err) => err);

  console.log(error);
};
