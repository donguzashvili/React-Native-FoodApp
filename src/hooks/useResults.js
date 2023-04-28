import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const useResults = (term) => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (term) => {
    try {
      const result = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "New York",
        },
      });
      setErrorMessage("");
      setRestaurants(result.data.businesses);
    } catch (err) {
      if (err.response) setErrorMessage(err.response.data.error.description);
      else console.log("error", err);
    }
  };

  useEffect(() => {
    searchApi(term);
  }, [term]);

  return [searchApi, restaurants, errorMessage];
};

export default useResults;
