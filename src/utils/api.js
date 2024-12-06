import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;


const api = axios.create({
  baseURL: "https://api.visitkorea.or.kr/openapi/service/rest",
  params: {
    serviceKey: decodeURIComponent(API_KEY),
    MobileOS: "ETC",
    MobileApp: "TourAPIApp",
    _type: "json",
  },
});

api.interceptors.request.use(
  (config) => {
    console.log("요청 시작:", config);
    return config;
  },
  (error) => {
    console.error("요청 오류:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("응답 성공:", response);
    return response.data.response.body.items.item;
  },
  (error) => {
    console.error("응답 오류:", error.response || error);
    return Promise.reject(error);
  }
);

export default api;