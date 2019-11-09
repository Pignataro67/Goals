import React, { Component } from 'react';
import Objective from './Objective';

const ObjectivesList = props => {
  const oList = props.objectives.map(objective => <li><Objective description= {objective.description}/></li>)
    return (
      <div> <strong>TODO</strong>
        <ul>
          {olist}
        </ul>
      </div>
    );
}

export default ObjectivesList;