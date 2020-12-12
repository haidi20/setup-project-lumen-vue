import http from "../index";
// import axios from "axios";

export const fetchPost = () => {
    http.get("/api/data")
        .then(ress => {
            console.log(ress.data);
        });
}