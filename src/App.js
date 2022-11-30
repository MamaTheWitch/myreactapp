import logo from './moon.png';
import './App.css';
import { FButton } from './components/FemaleButton.jsx';

  function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CHOOSE YOUR PLAYER
        </p>
        <FButton/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oh well, whatever, nevermind...
        </a>
      </header>
    </div>
  );
}
export default App;
