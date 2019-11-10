import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import GoalInput from './components/Goals/GoalInput';
import GoalsContainer from './containers/GoalsContainer';
// import { Button } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import ObjectivesContainer from './containers/ObjectivesContainer';

function App() {
  return (
    <Container>
        {/* <Header as='h1' className="main-header">Goals</Header> */}
        <h1 className="App-header">Modern Aspiration</h1>
        <Header as='h3'className="tagline">TagLine here</Header>
        <NavBar />

        <div>
          <Container>
            <Route exact path='/' render={Home} />
            <Route exact path='/goals/new' component={GoalInput} />
            <Route exact path='/goals' component={GoalsContainer} />
          </Container>
        </div>
    </Container>
  );
}

export default App;