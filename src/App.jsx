import React from "react";

// Components
import { Header } from "./components";
// Views
import { Home } from "./views";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <div>
    <Header />
    <Home />
    <GlobalStyle />
  </div>
);

export default App;
