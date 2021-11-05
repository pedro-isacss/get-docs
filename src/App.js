import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
// === RESUME ===
import Resume1 from "./Pages/Resume/Resume1";

// === INSTAGRAM ===
import Instagram1 from "./Pages/Instagram/Instagram1";
import Instagram2 from "./Pages/Instagram/Instagram2";

// === LETTER ===
import Letter1 from "./Pages/Letter/Letter1";

// === POSTER ===
import Poster1 from "./Pages/Poster/Poster1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* === RESUME === */}
          <Route path="/resume/resume-1" component={Resume1} />
          {/* === INSTAGRAM === */}
          <Route path="/instagram/instagram-1" component={Instagram1} />
          <Route path="/instagram/instagram-2" component={Instagram2} />
          {/* === LETTER === */}
          <Route path="/letter/letter-1" component={Letter1} />
          {/* === POSTER === */}
          <Route path="/poster/poster-1" component={Poster1} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
