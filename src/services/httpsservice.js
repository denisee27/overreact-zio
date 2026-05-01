import { createContext, useContext } from "react";
import axios from "axios";
const apiUrl = "https://reqres.in/api";
const HttpContext = createContext();

export const HttpService = ({ children }) => {
  const get = async (urlPath) => {
    try {
      const response = await axios.get(apiUrl + "/" + urlPath, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
      });
      return { success: true, response: response.data };
    } catch (error) {
      console.log(error);
      return { success: false, response: error.response?.data };
    }
  };
  const post = async (urlPath, formData) => {
    try {
      const response = await axios.post(apiUrl + "/" + urlPath, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },formData
      });
      console.log(response);
      return { success: true, response: response.data };
    } catch (error) {
      console.log(error);
      return { success: false, response: error.response?.data };
    }
  };
  return <HttpContext.Provider value={{ get, post }}>{children}</HttpContext.Provider>;
};
export const useHttpService = () => useContext(HttpContext);
