import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import MainPage from "./pages/mainpage/MainPage";
import LinkPage from "./pages/link/LinkPage";

function App() {
  return (
    <div className="wrapper">
      <Router>
        {/* <NavBar /> */}
        <div className="content">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/link" component={LinkPage} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
