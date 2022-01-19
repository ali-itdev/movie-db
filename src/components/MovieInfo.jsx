// import { useContext } from "react";
import PropTypes from "prop-types";

// Componenets
import { Thumb } from "../components";

// Assets
import { NoImage } from "../assets";

import { config } from "../lib";
import { MovieInfo as styles } from "../styles";

// Styles
const { Wrapper, Content, Text } = styles;

// Configs
const { IMAGE_BASE_URL, POSTER_SIZE } = config;

const MovieInfo = ({ movie }) => {
  // const [user] = useContext(Context);

  // const handleRating = async (value) => {
  //   const rate = await API.rateMovie(user.sessionId, movie.id, value);
  //   console.log(rate);
  // };

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          {/* {user && (
            <div>
              <p>Rate Movie</p>
              <Rate callback={handleRating} />
            </div>
          )} */}
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export { MovieInfo };
