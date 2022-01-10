import { Button as styles } from "../styles";
const { Wrapper } = styles;

export const Button = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);
