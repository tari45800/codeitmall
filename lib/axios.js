import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: "https://learn.codeit.kr/api/codeitmall",
});

export default instance;
