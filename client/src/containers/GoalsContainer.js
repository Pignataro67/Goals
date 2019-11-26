import React, { Component } from 'react';
import Goals from '../components/Goals/Goals';
import GoalInput from '../components/Goals/GoalInput';
import { connect } from 'react-redux';
import { fetchGoals, deleteGoal } from '../actions/goalsActions';
import { Container } from 'semantic-ui-react';
import GoalsHeader from '../components/Goals/GoalsHeader';

class GoalsContainer extends Component {

  componentDidMount(){
    this.props.fetchGoals()
  }

  render(){
    return(
      <Container fluid textAlign='justified'>
        <GoalsHeader />
        <Goals goals={this.props.goals} deleteGoal={this.props.deleteGoal} />
        <GoalInput />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals.goalsData
  }
}

export default connect(mapStateToProps, { fetchGoals, deleteGoal })(GoalsContainer);