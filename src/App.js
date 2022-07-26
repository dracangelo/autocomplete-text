import logo from './logo.svg';
import './App.css';
import HidableText from './HidableText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <HidableText text="Dynamic Text" />
      </header>
    </div>
  );
}

export default App;
