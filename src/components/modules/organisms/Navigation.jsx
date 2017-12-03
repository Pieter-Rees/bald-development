import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.primary};
  flex: 1;
`;

const Burger = styled.svg`
  height: 36px;

  // .top-bun {
  //   fill:red;
  // }
  //
  // .meat {
  //   fill: white;
  // }
  //
  // .bottom-bun {
  //   fill: blue;
  //
  // }
`;

function activateLasers() {
  console.log('The link was clicked.');
  this.setState({comment: 'Hello'});
}

class SNavigation extends React.Component {

  constructor(props) {
     super(props);
   }

  render() {
    return (
      <Burger onClick={activateLasers} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303.324 303.324"><path class="bottom-bun" d="M27.232 215.067c-21.56 0-21.56 13.05-21.56 19.823 0 45.73 47.754 49.927 106.66 49.927h78.657c58.906 0 106.66-7.98 106.66-49.927 0-6.774-2.066-19.823-21.356-19.823H27.232z"/><path class="meat" d="M303.324 180.028c0 7.49-6.127 13.616-13.616 13.616H13.616C6.126 193.644 0 187.517 0 180.028v-10.21c0-7.49 6.127-13.616 13.616-13.616h276.092c7.49 0 13.616 6.127 13.616 13.616v10.21z"/><path class="top-bun" d="M156.95 18.507h-10.576c-58.906 0-140.7 36.407-140.7 95.314 0 6.775 2.065 19.823 21.354 19.823h249.064c21.56 0 21.56-13.048 21.56-19.822-.002-58.906-81.796-95.313-140.702-95.313zM87.753 94.08c-5.63 9.388-15.324 13.92-21.655 10.124-6.33-3.797-6.9-14.483-1.27-23.87 5.628-9.388 15.323-13.92 21.654-10.124 6.33 3.796 6.9 14.483 1.27 23.87zm63.91 13.823c-7.05 0-12.767-9.266-12.767-20.696s5.716-20.696 12.766-20.696 12.766 9.267 12.766 20.697-5.716 20.696-12.766 20.696zm85.563-3.7c-6.33 3.797-16.026-.735-21.655-10.123-5.628-9.387-5.06-20.074 1.272-23.87 6.33-3.797 16.026.736 21.655 10.123 5.63 9.388 5.06 20.074-1.27 23.87z"/></Burger>
    );
  }
};

export default SNavigation;
