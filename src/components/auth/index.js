import { type } from "@testing-library/user-event/dist/type";
import { API } from "../../config";
import { Navigate } from "react-router-dom";

export const signup = (user) => {
  return fetch(`${API}/auth/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(err);
    });
};

export const signin = (user) => {
  return fetch(`${API}/auth/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(err);
    });
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return fetch(`${API}/auth/signout`, {
      method: "GET",
    })
      .then((response) => {
        console.log("signout", response);
        window.location.href = "/";
        // return <Navigate to="/" />
      })
      .catch((err) => console.log(err));
  }
  //   localStorage.clear();
  //   window.location.href = "/";
};
