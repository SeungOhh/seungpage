import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import MainPage from "./pages/mainpage/MainPage";
import LinkPage from "./pages/link/LinkPage";
import NavBar from "./component/NavBar/NavBar";

import testPage1 from "./pages/testPages/testPage1";

// nextjs와는 다르게 react에서는 App.js에서 시작
// nextjs의 경우 pages 디렉토리가 반드시 있어야 하며 이 디렉토리 안에 있는 index.js에서 home 시작

function App() {
  return (
    <div className="wrapper">
      <Router>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/link" component={LinkPage} />
            <Route exact path="/t1" component={testPage1} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
