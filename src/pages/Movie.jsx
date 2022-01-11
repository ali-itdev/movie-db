import { useParams } from "react-router-dom";

// Componenets
import {
  Spinner,
  BreadCrumb,
  MovieInfo,
  MovieInfoBar,
  Actor,
  Grid,
} from "../components";

// Hooks
import { useMovieFetch } from "../hooks";

// Assets
import { NoImage } from "../assets";

// Configs
import { config } from "../utils";
const { IMAGE_BASE_URL, POSTER_SIZE } = config;

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Error</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
