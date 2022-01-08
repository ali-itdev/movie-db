import react, { useEffect, useState } from "react";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../utils/config";
// Api
import API from "../utils";
// Componenets

// Hook

// Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  // const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(!error);
      setLoading(!loading);

      const movies = await API.fetchMovies(searchTerm, page);
      console.log(movies);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return <div>Home Page</div>;
};

export default Home;
