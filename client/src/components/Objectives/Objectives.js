import React from 'react';
import Objective from './Objective';

const Objectives = (props) => {
  const objectivesList = props.objectives.map(objective => 
    <li  className="objective-items">
       <Objective 
         key={objective.id} 
         id={objective.id}
         completed={objective.completed}
         description={objective.description} 
         deleteObjective={props.deleteObjective}
         toggleCompleted={props.toggleCompleted}
       />
    </li>)
    return (
      <div> 
      <h1>{props.goal.aim}</h1>
      <label><strong>THE PLAN</strong></label>
      <p>{props.goal.strategy}</p>
      <strong>KEY OBJECTIVES</strong>
        <ul>
          {objectivesList}
        </ul>
      </div>
    );
}

export default Objectives;