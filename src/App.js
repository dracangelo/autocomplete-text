import './App.css';
import AutocompleteText from './AutocompleteText';
import words from './words';

function App() {
  return (
    <div className="App">
      <AutocompleteText items ={words}/>
    </div>
  );
}

export default App;
