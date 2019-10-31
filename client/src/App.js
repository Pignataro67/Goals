import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoalsContainer from './containers/GoalsContainer';
import NavBar from './components/Navbar';
import { Route } from 'react-router-dom';
import AddGoal from './components/Goals/AddGoal';

function App() {
  return (
    <div className="App">
        <h1>Goals</h1>
        hello
        <NavBar />

        <div>
          <Route exact path='/goals/new' component={AddGoal} />
          <Route exact path='/goals' component={GoalsContainer} />
        </div>
    </div>
  );
}

export default App;