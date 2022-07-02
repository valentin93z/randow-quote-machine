import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My first React App.
        </p>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/valentin_zagrebin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Valentin Zagrebin
        </a>
      </header>
    </div>
  );
}

export default App;
