import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Tech DnA: Technology, Data & Analytics.</h2>
        <table><tr><td>
        <img src={logo} className="App-logo" alt="logo" /> 
          </td><td>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
            </td></tr></table>
      </header>
    </div>
  );
}

export default App;
