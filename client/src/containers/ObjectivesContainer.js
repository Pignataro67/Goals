import React, { Component } from 'react';
import Objectives from '../components/Objectives/Objectives';
import ObjectiveInput from '../components/Objectives/ObjectiveInput';
import { connect } from 'react-redux';
import { addObjective } from '../actions/objectivesActions';

class ObjectivesContainer extends Component {
  
  render(){
    return(
      <div>
        Objectives Container
        <ObjectiveInput addObjective={this.props.addObjective} goalId={this.props.goal.id} />
      </div>
    )
  }
}

const mapStateToProps = ({objectives}) => {
  return {objectives}
}

const mapDispatchToProps = dispatch => ({
  addObjective: (objectiveInput, goalId) => dispatch(addObjective(objectiveInput, goalId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ObjectivesContainer);