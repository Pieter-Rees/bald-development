import React from 'react';
import styled from 'styled-components';
import Button from '../molecules/Button';
import NavigationMenu from '../organisms/Navigation-menu';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    let isToggleOn = this.state.isToggleOn;
    return(
      <NavigationMenu/>
    )
  }
}


export default Navigation;
