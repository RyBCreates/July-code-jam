import { baseUrl } from "../constants";

const getToken = () => {
  return localStorage.getItem("jwt");
};

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export function register({ email, password, username, avatar }) {
  return fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username, avatar }),
  }).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    return Promise.reject(data);
  });
}

export function login({ email, password }) {
  return fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    });
}

export function checkToken(token) {
  return fetch(`${baseUrl}/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export function updateUser({ username, avatar }) {
  const token = getToken();
  return fetch(`${baseUrl}/auth/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ username, avatar }),
  }).then(checkResponse);
}
