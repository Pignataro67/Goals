import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './containers/Main';
// import NavBar from './components/Navbar';
// import { Route } from 'react-router-dom';
// import Home from './components/Home';
// import GoalInput from './components/Goals/GoalInput';
// import GoalsContainer from './containers/GoalsContainer';
// import { Container, Header } from 'semantic-ui-react';
// import ObjectivesContainer from './containers/ObjectivesContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      {/* <h1 className="App-header">Modern Aspiration</h1>
      <Container>
        <Header as='h3' className='tagline'>TagLine here</Header>
        <NavBar />

          <Container>
            <Route exact path='/' render={Home} />
            <Route exact path='/goals/new' component={GoalInput} />
            <Route exact path='/goals/:goalId/objectives' component={ObjectivesContainer} />
          </Container>
      </Container> */}
      </div>
    );
  }
}

export default App;