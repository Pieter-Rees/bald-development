import React from 'react';
import styled from 'styled-components';
import Button from '../molecules/Button';
import Menu from '../organisms/Menu';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('lol');
    debugger

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    let a = 'piet';
    if(a) {
    }
  }

  render() {
    let isToggleOn = this.state.isToggleOn;
    return(
      <div>
        <div onClick={this.handleClick}>
          <Button></Button>
        </div>

        {isToggleOn ? (
          <Menu />
      ) : (null)}
      </div>
    )
  }
}


export default Navigation;
