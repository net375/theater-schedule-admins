import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/Toolbar/Header';
import Sidebar from './components/Toolbar/Sidebar';
import './App.css';
import SendPostPage from './components/SendPostPage';
import Messages from "./components/Messages/MessagePage"
import Aux from "./hoc/Auxiliary";

const App: React.FC = () => {
  return (
    <Aux>
      <Header />
      <main>
        <Sidebar />
        <Switch>
          <Route path="/messages" component={Messages} />
          <Route path="/sendpost" component={SendPostPage} />
        </Switch>
      </main>
    </div>
  </Aux>
  );
}

export default App;
