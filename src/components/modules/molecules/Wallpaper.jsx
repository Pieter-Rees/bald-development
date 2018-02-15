import React from 'react';
import styled from 'styled-components';
import Bald from '../atoms/Bald';

const SWallpaper = styled.div`
  stroke: white;
  fill: ${props => props.theme.colors.color1};
`;

class Wallpaper extends React.Component {

  render() {
    return (
      <SWallpaper>
        <Bald></Bald>
      </SWallpaper>
    );
  }
};

export default Wallpaper;
