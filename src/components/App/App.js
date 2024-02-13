// App component
import './App.css';
// Counter Component
import Counter from '../Counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter set={5} min={0} max={100}/>
      <Counter set={2} min={0} max={100}/>
      <Counter set={1} min={0} max={100}/>
    </div>
  );
}

export default App;
