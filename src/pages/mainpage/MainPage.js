import logo from "./logo.svg";
import "../../css/App.css";

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Seung's hompage</p>
        <a
          className="App-link"
          href="https://oneclickai.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OneClick Ai
        </a>
      </header>
    </div>
  );
}

export default MainPage;
