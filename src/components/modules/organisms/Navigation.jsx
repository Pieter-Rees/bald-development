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
      <div>
        <Button />
        <Menu />
      </div>
    )
  }
}


export default Navigation;
