import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ScrollToTop from "./components/scroll/ScrollToTop";
import Nav from "./components/navigation/Nav";
import Home from "./pages/home/Home";
import GameDetails from "./pages/home/gameDetails/GameDetails";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#177e89'
    },
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={darkTheme}>
        <Nav />
        <div className="app-content">
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/games-database" element={<Home />} />
              <Route path=":id" element={<GameDetails />} />
            </Routes>
          </ScrollToTop>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
