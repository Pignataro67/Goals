import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Goal extends Component {
  handleClick = () => {
    this.props.deleteGoal(this.props.id)
  }

  render(){
    const Goal = ({ aim, deleteGoal, id }) => {
    
    return(
      <div className="goal">
        <NavLink key={id} to={`/goals/${id}`}><h3>{aim}</h3></NavLink>
        
        <Button className="delete-button" basic color='red' size='mini' onClick={ () => deleteGoal(id)}>Delete</Button>
      </div>
    )
  }
}

export default Goal;