import Game from './components/Game/Game';
import ProgressBar from './components/ProgressBar/ProgressBar';
import './App.scss'

function App() {
  return (
    <div className="app">
      <div className="app-title">
        Noter championne est adolfo avec un score de 99/100 
      </div>
      <div className="app-banner">
        MEMORY GAME
      </div>
      <Game />
      <ProgressBar />
    </div>
  );
}

export default App;
