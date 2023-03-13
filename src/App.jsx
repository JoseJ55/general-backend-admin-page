import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element={(
            <div className="App" id="app">
              <Login />
            </div>
          )}
        />
        <Route
          exact
          path="/signup"
          element={(
            <div className="App" id="app">
              <Signup />
            </div>
          )}
        />

        <Route
          exact
          path="/"
          element={(
            <div className="App" id="app">
              <Home />
            </div>
          )}
        />
      </Routes>
    </Router>
  );
}

export default App;
