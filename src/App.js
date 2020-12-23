import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
      <Game />
    </header>
  </div>
);

export default App;
