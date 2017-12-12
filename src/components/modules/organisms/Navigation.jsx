import React from 'react';
import styled from 'styled-components';
import Button from '../molecules/Button';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    let a = 'piet';
    if(a) {
      console.log('lol');
    }
  }

  render() {
    return(
      <div> <Button /></div>
    )
  }
}


export default Navigation;
