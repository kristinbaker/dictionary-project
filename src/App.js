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
        This page was coded by Kristin Baker, is <a href="https://github.com/kristinbaker/dictionary-project">open-sourced on Github </a> and <a href="https://agitated-brown-f53079.netlify.app/">hosted by Netlify</a>
        </small>
      </footer>
    </div>
  );
}

export default App;
