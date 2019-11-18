import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ObjectivesContainer from '../../containers/ObjectivesContainer';

class Goal extends Component {
  handleClick = () => {
    this.props.deleteGoal(this.props.id)
  }

  render(){
    const { aim, strategy, category, goal } = this.props;
    return(
      <div className="goal">
        <Link key={this.props.id} to={`/goals/${goal.id}`}><h3>{aim}</h3></Link>
        <strong>Strategy:</strong>
          <p>{strategy}</p>
        <strong>Category:</strong>
            <p>{category}</p>
        <Button basic color='red' size='mini' onClick={ () => this.props.deleteGoal(this.props.id)}>Delete</Button>
        <ObjectivesContainer goal={goal} />
      </div>
    )
  }
}

export default Goal;