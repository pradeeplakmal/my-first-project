import { api } from "./api";
//import ky from "ky";

export const loginUser = async (loginData) => {
  const response = await fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    body: JSON.stringify({
      email: loginData?.email,
      password: loginData?.password,
    }),
  });

  console.log("LOGIN ACTION", response.json());
};

//Get Movies
export const getMovies = async () => {
  try {
    const response = await api.get("movies", {
      cache: "no-store",
    });

    if (response.ok) {
      return response.json();
    } else {
      return { error: true, message: "somthing went wrong" };
    }
  } catch (error) {
    console.log("MOVIES RESPONSE", error);
    if (error) {
      //handle HTTP errors specically
      const status = error?.response?.status; //HTTP Status code
      const responseBody = await error?.response?.json(); // parse the response body if possible

      console.log("HTTP Error", status, responseBody);
    } else {
      //handle non-HTTP errors (network issues)
      console.log("Unknown error:", error);
    }
    return undefined;
  }
};
