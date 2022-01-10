import { Link } from "react-router-dom";

import { BreadCrumb as styles } from "../styles";
const { Wrapper, Content } = styles;

export const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);
