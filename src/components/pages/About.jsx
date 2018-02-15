import React, { } from 'react';
import styled from 'styled-components';

import Title from '../modules/atoms/Title.jsx';
import Paragraph from '../modules/atoms/Paragraph.jsx';

import Logo from '../modules/atoms/Logo.jsx';
import Wallpaper from '../modules/molecules/Wallpaper.jsx';

const SSection = styled.header`
  background-color: ${props => props.theme.colors.color1};
}
`;

class About extends React.Component {
  render() {
    return (
      <SSection className="section about" id="section-about">
        <div className="content">
          <Logo text="BLD."></Logo>
          <Wallpaper></Wallpaper>
        </div>
      </SSection>
    );
  }
};

export default About;
