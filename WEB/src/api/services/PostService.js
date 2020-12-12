import http from "../index";
// import axios from "axios";

export const fetchPost = () => {
    let data;

    http.get("/api/data")
        .then(ress => {
            data = ress.data;
        });

    return data;
}