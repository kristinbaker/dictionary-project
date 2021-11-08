import './App.css';
import Dictionary from './Dictionary';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBook } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="app">
      <header className="app-header">
      <span>Dictionary <FontAwesomeIcon icon={faBook} className="book-icon" /> </span> 
      </header>
      <main className="app-main"> What word do you want to look up?</main>  
      <Dictionary />
      <footer className="app-footer"><small>
        This page was coded by Kristin Baker, is <a href="https://github.com/kristinbaker/dictionary-project" target="_blank" rel="noreferrer">open-sourced on Github </a> and <a href="https://agitated-brown-f53079.netlify.app/" target="_blank" rel="noreferrer">hosted by Netlify</a>
        </small>
      </footer>
    </div>
  );
}

export default App;
