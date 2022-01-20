
import './App.css';
import web3 from './web3';
function App() {

  web3.eth.getAccounts().then(console.log)
  return (
    <div className="App">
      <header className="App-header">
       <h1>My meta mask details</h1>
      </header>
    </div>
  );
}

export default App;
