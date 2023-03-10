import './App.css';
import Test from './components/Test';

function App() {
  var a = "10";
  console.log(a);
  var a = "20";
  let b = "30";
  b = "40";
  return (
    <div className="App">
      <header className="App-header">
        <h1>{a}</h1>
        <h1>{b}</h1>
        <Test/>
      </header>
    </div>
  );
}

export default App;
