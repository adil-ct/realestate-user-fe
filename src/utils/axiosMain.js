/* eslint-disable no-undef */
import axios from "axios";
import useConfig from 'utils/config'

const { END_POINT_URL, CMS_END_POINT_URL } = useConfig();

// const axiosMain = axios.create({
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const blogMain = axios.create({
  baseURL: CMS_END_POINT_URL,
})
const axiosMain = axios.create({
    baseURL: END_POINT_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosMain.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  async (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      //logout
      localStorage.removeItem("authToken");
      localStorage.removeItem("toaster-type");
      localStorage.removeItem("userId");
      localStorage.removeItem("persist:root");
      // // Setting the message to display in toaster when the app reloads
      // localStorage.setItem("toaster-message", error.response.data.msg);
      // localStorage.setItem("toaster-type", "error");
      window.location = "/";
      return Promise.reject();
    }
    return error.response;
  }
);

export default axiosMain;
