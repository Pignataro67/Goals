import React, { Component } from 'react';

class Goal extends Component {
  handleClick = () => {
    this.props.deleteGoal(this.props.id)
  }

  render(){
    const { aim, strategy, category, objectives, goal } = this.props;
    return(
      <div className="Goal">
        <h3>{aim}</h3>
        <strong>Strategy:</strong>
          <p>{strategy}</p>
        <strong>Category:</strong>
            <p>{category}</p>
        <Button basic color='red' size='mini' onClick={() => this.props.deleteGoal(this.props.id)}>Delete</Button>
        <p><ObjectivesContainer goal={goal} objectives={objectives} /></p>
      </div>
    )
  }
}

export default Goal;