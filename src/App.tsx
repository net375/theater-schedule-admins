import React from 'react';
import Header from './components/Toolbar/Header';
import Sidebar from './components/Toolbar/Sidebar';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
