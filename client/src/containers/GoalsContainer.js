import React, { Component } from 'react';
import AddGoal from '../components/Goals/AddGoal';
import GoalsList from '../components/Goals/GoalsList';
import GoalInput from '../components/Goals/GoalInput';
import { connect } from 'react-redux';
import { fetchGoals, deleteGoal } from  '../actions/goalsActions';
import { Container } from 'semantic-ui-react';

class GoalsContainer extends Component {

  componentDidMount(){
    this.props.fetchGoals()
  }

  render(){
    return(
      <Container fluid textAlign='justified'>
          Hello
        <GoalsList goals={this.props.goals} deleteGoal={this.props.deleteGoal} />
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

export default connect(mapStatetoProps, { fetchGoals, deleteGoal })(GoalsContainer);