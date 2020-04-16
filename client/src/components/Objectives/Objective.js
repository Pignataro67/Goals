import React, { Component } from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';

export default class Objective extends Component {

  handleCheck = () => {
    this.props.toggleCompleted(this.props.id)
  }

  render() {
    return (
      <div>
        <Icon className="pointer" name='edit' color='blue' onClick={() => console.log("edit some shhhhhh")} />
        change delete button to icon
        <Icon className="pointer" name='delete' color='red' onClick={() => this.props.deleteObjective(this.props.id)} />
        <Checkbox value={this.props.completed} checked={!!this.props.completed} onChange={(e) => this.handleCheck(e)} />
        {this.props.description} 
      </div>
    )
  }
}