import { useState, useEffect } from "react";
import zomato from "../api/zomato";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    console.log("Hey");
    try {
      const response = await zomato.get("/search", {
        params: {
          q: searchTerm,
          count: 20
        }
      });
      setResults(response.data.restaurants);
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  //BAD CODE!!
  //searchApi("pasta");
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
