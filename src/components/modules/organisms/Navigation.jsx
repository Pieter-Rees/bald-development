import React from 'react';
import styled from 'styled-components';

class Button extends React.Component {
  render() {
    return (
      <button
        onClick={() => this.setState({ backgroundColor: 'red' })}
        style={this.state}
      >
        Set background to red
      </button>
    )
  }
}

export default Button;
