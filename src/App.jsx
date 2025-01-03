import { Domnomnom } from "./nom/Domnomnom";
import "./App.css";

function App() {
  //Domnomnom has 2 modes, "clicker" and "auto"
  const consume = Domnomnom("clicker");
  const massConsume = Domnomnom("auto");
  return (
    <div title="exempt" className="app-container">
      <header>
        <h1 title="exempt">DomNomNom</h1>
      </header>
      <button title="exempt" className="feed-button" onClick={consume}>
        Consume
      </button>
      <button title="exempt" className="feed-button" onClick={massConsume}>
        Mass Consume
      </button>
      <div className="grid-container">
        <div className="grid-box">
          <button className="grid-element">Don't eat me!</button>
        </div>
        <div className="grid-box">
          <input type="text" placeholder="Ahhhh!" className="grid-element" />
        </div>
        <div className="grid-box">
          <input
            type="number"
            placeholder="Save me!"
            className="grid-element"
          />
        </div>
        <div className="grid-box">
          <textarea placeholder="Help me!" className="grid-element"></textarea>
        </div>
        <div className="grid-box">
          <input type="checkbox" id="checkbox1" />
          <label htmlFor="checkbox1">Eat me?</label>
        </div>
        <div className="grid-box">
          <input type="radio" id="radio1" name="radioGroup" />
          <label htmlFor="radio1">Don't!</label>
        </div>
        <div className="grid-box">
          <select className="grid-element">
            <option>Save me!</option>
            <option>Nomnomnom</option>
          </select>
        </div>
        <div className="grid-box">
          <input type="color" className="grid-element" />
        </div>
        <div className="grid-box">
          <input type="range" className="grid-element" />
        </div>
        <div className="grid-box">
          <button className="grid-element">I'm doomed!</button>
        </div>
        <div className="grid-box">
          <input type="email" placeholder="Nooo!" className="grid-element" />
        </div>
        <div className="grid-box">
          <input type="file" className="grid-element" />
        </div>
      </div>
    </div>
  );
}

export default App;
