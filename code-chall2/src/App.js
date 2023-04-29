
import "./App.css";
import NavBar from "../components/Navbar";
import DataFetching from "../components/Datafetch";
import BotCollection from "../components/BotCollection";
import BotArmy from "../components/YourBotArmy";

// import Display from './components/BotsDisplay';
import './App.css';
import Display from './components/BotsDisplay';
// import BotsPage from './components/BotsPage';


function App() {
  return (
    <div>
      <NavBar />
      <BotArmy />
      <DataFetching />
      <BotCollection />
      <div className="App">
        <Display />
      </div>
    </div>
  );
}






