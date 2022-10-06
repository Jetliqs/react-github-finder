import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// searching for users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  // const response = await github.get(`/search/users?${params}`);
  // console.log(response);
  // return response.data.items;

  const response = await github
    .get(`/search/users?${params}`)
    .then((response) => response)
    .catch((error) => error);

  return response.data.items;
};

export const clearSearch = () => {
  return [];
};

// Get user data and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'updated',
    per_page: 10,
  });

  const response = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ])
    .then((res) => res)
    .catch((err) => {
      if (err.response.status === 404) {
        console.log('Error 404');
      }
    });

  const [userData, userRepos] = response;
  return { userData: userData.data, userRepos: userRepos.data };
};

// // Get a single user data
// export const getUserData = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   if (response.status === 404) {
//     window.location = '/notfound';
//   } else {
//     const data = await response.json();
//     return data;
//   }
// };

// // Get user repositories
// export const getUserRepos = async (login) => {
//   // setLoading();

//   const params = new URLSearchParams({
//     sort: 'updated',
//     per_page: 10,
//   });
//   console.log(params);
//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   if (response.status === 404) {
//     window.location = '/notfound';
//   } else {
//     const data = await response.json();
//     console.log(login);
//     console.log(data);

//     return data;

//     // dispatch({
//     //   type: 'GET_USER_REPOS',
//     //   payload: {
//     //     isLoading: false,
//     //     repos: data,
//     //   },
//     // });
//   }
// };
