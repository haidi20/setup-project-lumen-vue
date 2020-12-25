import axios from "axios";
import router from '@/router';

const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`,
    }
});

// Add a response interceptor
instance.interceptors.response.use(function(responses) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with responses data

    const response = responses.data;
    if (!response.success) {
        localStorage.token = null;
        router.push('/sign-in');
    }

    return responses;
}, function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance;