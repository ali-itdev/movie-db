import { Link } from "react-router-dom";
import { RMDBLogo, TMDBLogo } from "../assets";
import { Header as styles } from "../styles";
const { Wrapper, Content, LogoImg, TMDBLogoIMG } = styles;

export const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="rmdb-log" />
      </Link>
      <TMDBLogoIMG src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);
