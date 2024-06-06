import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading";
import Btn from "./components/Btn";
import Card from "./components/Card";

function App() {
  const clickHandler = () => console.log("clicked; passed from App prop");

  return (
    <div className="App">
      <header className="App-header">
        <Heading firstName="Danielle" />
        <Heading firstName="Bob" />
        <Card h2="First card's h2" h3="First card's h3" />
        <Btn onClick={clickHandler} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is coming from a second paragraph!!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
