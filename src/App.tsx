import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Messages from "./components/Messages/MessagePage"
import Aux from "./hoc/Auxiliary";

const App: React.FC = () => {
  return (
    <Aux>
    <main>
      <Switch>
        <Route path="/messages" component={Messages}/>
      </Switch>
    </main>
  </Aux>
  );
}

export default App;
