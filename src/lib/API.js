// import {
//   API_URL,
//   API_KEY,
//   REQUEST_TOKEN_URL,
//   LOGIN_URL,
//   SESSION_ID_URL,
// } from "./config.js";

// const defaultConfig = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const res = await fetch(
      `/api/movies?page=${page}&searchTerm=${searchTerm}`
    );
    const data = await res.json();
    return data;
  },
  fetchMovie: async (movieId) => {
    const res = await fetch(`/api/${movieId}`);
    const data = await res.json();
    return data;
  },
  fetchCredits: async (movieId) => {
    const res = await fetch(`/api/${movieId}/credits`);
    const data = await res.json();
    return data;
  },

  // Bonus material below for login
  // getRequestToken: async () => {
  //   const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
  //   return reqToken.request_token;
  // },
  // authenticate: async (requestToken, username, password) => {
  //   const bodyData = {
  //     username,
  //     password,
  //     request_token: requestToken,
  //   };
  //   // First authenticate the requestToken
  //   const data = await (
  //     await fetch(LOGIN_URL, {
  //       ...defaultConfig,
  //       body: JSON.stringify(bodyData),
  //     })
  //   ).json();
  //   // Then get the sessionId with the requestToken
  //   if (data.success) {
  //     const sessionId = await (
  //       await fetch(SESSION_ID_URL, {
  //         ...defaultConfig,
  //         body: JSON.stringify({ request_token: requestToken }),
  //       })
  //     ).json();
  //     return sessionId;
  //   }
  // },
  // rateMovie: async (sessionId, movieId, value) => {
  //   const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

  //   const rating = await (
  //     await fetch(endpoint, {
  //       ...defaultConfig,
  //       body: JSON.stringify({ value }),
  //     })
  //   ).json();

  //   return rating;
  // },
};

export default apiSettings;
