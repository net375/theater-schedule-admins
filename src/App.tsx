import React from 'react';
import Header from './components/Toolbar/Header';
import Sidebar from './components/Toolbar/Sidebar';
import './App.css';
import { Switch, Route } from 'react-router';
import SendPostPage from './components/SendPostPage';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        <Switch>
          <Route path="/sendpost" component={SendPostPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
