import logo from '../logo.svg';
import '../css/App.css';
import TextAnimation from '../components/animations/TextAnimation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <TextAnimation />
        </p>
        
      </header>
    </div>
  );
}

export default App;
