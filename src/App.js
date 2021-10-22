import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Dictionary 
      </header>
      <div className="App-body">What word do you want to look up? </div>
      <Dictionary />
      <footer className="App-footer"><small>
        This page was coded by Kristin Baker, is open-sourced on Github, and is hosted by Netlify
        </small>
      </footer>
    </div>
  );
}

export default App;
