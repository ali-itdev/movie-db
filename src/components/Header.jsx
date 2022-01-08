import React from "react";

import RMDBLogo from "../images/react-movie-logo.svg";
import TMDBLogo from "../images/tmdb_logo.svg";

import { Wrapper, Content, LogoIMG, TMDBLogoIMG } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoIMG src={RMDBLogo} alt="rmdb-log" />
      <TMDBLogoIMG src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
