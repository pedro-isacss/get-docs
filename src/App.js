import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
// === RESUME ===
import Resume1 from "./Pages/Resume/Resume1";

// === INSTAGRAM ===
import Instagram1 from "./Pages/Instagram/Instagram1";
import Instagram2 from "./Pages/Instagram/Instagram2";
import Instagram3 from "./Pages/Instagram/Instagram3";
import Instagram4 from "./Pages/Instagram/Instagram4";
import Instagram5 from "./Pages/Instagram/Instagram5";

// === LETTER ===
import Letter1 from "./Pages/Letter/Letter1";
import Letter2 from "./Pages/Letter/Letter2";

// === POSTER ===
import Poster1 from "./Pages/Poster/Poster1";
import Poster2 from "./Pages/Poster/Poster2";
import Poster3 from "./Pages/Poster/Poster3";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/get-docs">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          {/* === RESUME === */}
          <Route path="/resume/resume-1" component={Resume1} />
          {/* === INSTAGRAM === */}
          <Route path="/instagram/instagram-1" component={Instagram1} />
          <Route path="/instagram/instagram-2" component={Instagram2} />
          <Route path="/instagram/instagram-3" component={Instagram3} />
          <Route path="/instagram/instagram-4" component={Instagram4} />
          <Route path="/instagram/instagram-5" component={Instagram5} />
          {/* === LETTER === */}
          <Route path="/letter/letter-1" component={Letter1} />
          <Route path="/letter/letter-2" component={Letter2} />
          {/* === POSTER === */}
          <Route path="/poster/poster-1" component={Poster1} />
          <Route path="/poster/poster-2" component={Poster2} />
          <Route path="/poster/poster-3" component={Poster3} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
