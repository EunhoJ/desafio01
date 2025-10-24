import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts", // ou o endereço onde sua API NestJS está rodando
});

export default api;