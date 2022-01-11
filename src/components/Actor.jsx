import PropTypes from "prop-types";
// Styles
import { Actor as styles } from "../styles";
const { Wrapper, Image } = styles;

const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};

export { Actor };
