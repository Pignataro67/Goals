import React, { Component } from 'react';

export default class Objective extends Component {
  render(){
    return(
      <div>
        <button onClick={() => this.props.deleteObjective(this.props.id)}> X</button>
      </div>
    )
  }
}