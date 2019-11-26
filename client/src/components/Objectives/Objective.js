import React, { Component } from 'react';
import { Button, Checkbox, Icon } from 'semantic-ui-react';

export default class Objective extends Component {

  constructor() {
    super()
    this.state = {
      completed: false
    }
  }

  handleCheck = e => {
    e.preventDefault();
    this.props.toggleCompleted(this.props.id)
  }

  handleClick = e => {
    e.preventDefault();
    alert('clicked delete Icon!')
  }

  render(){
    return(
      <div>
        
      </div>
    )
  }
}