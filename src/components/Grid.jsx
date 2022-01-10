import { Grid as styles } from "../styles";
const { Wrapper, Content } = styles;

export const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);
