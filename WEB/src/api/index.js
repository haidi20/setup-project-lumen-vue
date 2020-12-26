import axios from "axios";
import router from '@/router';
import store from '@/store';

const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-type": "application/json",
    }
});

// Add a response interceptor
instance.interceptors.response.use(function(responses) {
    const response = responses.data;
    if (!response.success) {
        deleteAllDataAuth();
        router.push('/sign-in').catch(() => {});
    }

    return responses;
}, function(error) {
    return Promise.reject(error);
});

function deleteAllDataAuth() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    store.dispatch('auth/setNullState');
}

export default instance;