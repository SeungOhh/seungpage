import "../../css/App.css";

function testPage() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a test page. <br></br>I use this page to test out some of the
          functions <br></br>
          or the efficiency of it!
        </p>

        <button onClick={() => console.log("test me")}>Here is a button</button>
      </header>
    </div>
  );
}

export default testPage;
