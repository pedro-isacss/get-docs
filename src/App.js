import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Resume1 from "./Pages/Resume1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume-1" component={Resume1} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
