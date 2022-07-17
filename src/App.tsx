import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AppContext, AppContextProvider } from "./context";
import counterActions from "./context/actions/counter.actions";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <Card />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </AppContextProvider>
  );
}

const Card = () => {
  const { state, dispatch } = useContext(AppContext);

  const onAdd = () => counterActions.add(dispatch);
  const onRemove = () => counterActions.remove(dispatch);

  return (
    <div className="card">
      <div className="row">
        <button onClick={onAdd}>Press me to add</button>
        <button onClick={onRemove}>Press me to remove</button>
      </div>
      <p>Count is {state.counter}</p>
    </div>
  );
};

export default App;
