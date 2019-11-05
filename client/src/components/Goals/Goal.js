import React, { Component } from 'react';

class Goal extends Component {
  handleClick = () => {
    this.props.deleteGoal(this.props.id)
  }

  render(){
    const {aim, strategy, category, objectives } = this.props;
    return(
      <div className="Goal">
        <h3>{aim}</h3>
        <strong>Strategy:</strong>
          <p>{strategy}</p>
        <strong>Category:</strong>
            <p>{category}</p>
        <button onClick={() => this.props.deleteGoal(this.props.id)}>Delete</button>
      </div>
    )
  }
}

export default Goal;