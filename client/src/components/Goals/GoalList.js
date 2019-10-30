import React, { Component } from 'react';
import Goal from './Goal'

export default class GoalList extends Component {
  render(){
    debugger
    return(
      <div>
        GoalList
      </div>
    )
  }
}

GoalList.defaultProps = {
  Goals: [
      {
      id: 1,
      aim: "Become a Software Engineer",
      objectives: [
      {
      id: 1,
      description: "Build the best Project Ever",
      },
      {
      id: 2,
      description: "Build Portfolio",
      }
      ]
      }
  ]
} 