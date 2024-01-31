import axios from "axios";
import React from "react";

const API = axios.create({
    baseURL: 'http://localhost:8080/api/v1/'
});

export default API;