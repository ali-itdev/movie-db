import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Movie, NotFound } from "./pages";
import { GlobalStyle } from "./styles";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;