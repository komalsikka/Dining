import axios from "axios";

export default axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",
  headers: {
    "user-key": "601605848feecce8c0bb5d2145bf1d21"
  }
});
