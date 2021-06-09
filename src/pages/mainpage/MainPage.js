import logo from "./logo.svg";
import "../../css/App.css";

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, i'm Seung. <br></br>
          I'm interested in technologies, teaching and arts! <br></br>
          I'd like to make small but better changes to the world.
        </p>
        <p>Please contact me through my email, github.</p>
        <a href="mailto:osy044@naver.com">Email</a>
        <a href="https://github.com/SeungOhh">Github</a>

        <p>Works that I did or contributed</p>
        <a href="https://oneclickai.co.kr/">OneClickAI</a>
        <a href="/">Vehicle modeling and control</a>
        <a href="/">Aerodynamics around flapping wings</a>

        <p>Works that I did or contributed</p>
        <a href="/testPage1">ssss</a>
      </header>
    </div>
  );
}

export default MainPage;
