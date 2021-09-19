import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Resume1 from "./Pages/Resume1";
import Instagram1 from "./Pages/Instagram1";
import Letter1 from "./Pages/Letter1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume-1" component={Resume1} />
          <Route path="/instagram-1" component={Instagram1} />
          <Route path="/letter-1" component={Letter1} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
