import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Chatter</p>
      </header>
      <footer className="App-footer">
        <div className='message-box'>
          <p></p>
          <button className='send-button'>^</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
