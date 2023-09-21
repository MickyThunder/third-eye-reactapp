import logo from './header.jpg';
import './App.css';
import BasicExample from './card'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <div class="mtext">
        Tal - Third Eye View
      </div>
      <div style={{display:"inline-flex"}}>
        {BasicExample()}
       


      </div>
    </div>
  );
}

export default App;
