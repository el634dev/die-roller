import logo from '../../../src/logo.svg';
// App component
import './App.css';
// Counter Component
import Counter from '../Counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
