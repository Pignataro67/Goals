import React, { Component } from 'react';

export default class Goal extends Component {
  render(){
    return(
      <div>
        {this.props.aim}
      </div>
    )
  }
}