import { useParams } from "react-router-dom";
import { Grid, Spinner, BreadCrumb } from "../components";
import { useMovieFetch } from "../hooks";
import { NoImage } from "../assets";
import { config } from "../utils";
const { IMAGE_BASE_URL, POSTER_SIZE } = config;

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Eror</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
    </>
  );
};

export default Movie;
