import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../src/routes/Routes';
import "./App.css"
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes />
    </Router>
  );
}

export default App;