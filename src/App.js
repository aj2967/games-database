import { Routes, Route } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import Home from "./pages/home/Home";
import FreeToPlay from "./pages/freeToPlay/FreeToPlay";
import Giveaways from "./pages/giveaways/Giveaways";
import GameDetails from "./pages/home/gameDetails/GameDetails";



function App() {
  return (
    <div className="app">
      <Nav />
      <div className="app-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path=":id" element={<GameDetails />} />
          <Route path="/games/:id" element={<GameDetails />} />
          <Route path="/free" element={<FreeToPlay />} />
          <Route path="/giveaways" element={<Giveaways />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
