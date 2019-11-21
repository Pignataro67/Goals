import React from 'react';
import Goal from './Goal';
import { Container } from 'semantic-ui-react';

const Goals = props => {
  const goalsList = props.goals.map(goal => <Goal key={goal.id} goal={goal} {...goal} deleteGoal={props.deleteGoal}/>)
    return (
    <ol>
    {goalsList}
    </ol>
  );
};

export default Goals;