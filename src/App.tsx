import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Messages from "./components/Messages/MessagePage"
import formslink from "./components/LinkForms/LinkForms"
import Aux from "./hoc/Auxiliary";

const App: React.FC = () => {
  return (
    <Aux>
    <main>
      <Switch>
        <Route path="/messages" component={Messages}/>
        <Route path="/formslink" component = {formslink}/>
      </Switch>
    </main>
  </Aux>
  );
}

export default App;
