import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.weekday.technology/",  headers: {
        Accept: "application/json"
    },

})

axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response?.data) || "Something went wrong")
)

export default axiosInstance;
