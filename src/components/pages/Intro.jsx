import React, { } from 'react';
import styled from 'styled-components';

import Title from '../modules/atoms/Title.jsx';
import Paragraph from '../modules/atoms/Paragraph.jsx';

import Logo from '../modules/atoms/Logo.jsx';
import Wallpaper from '../modules/molecules/Wallpaper.jsx';

const SSection = styled.header`
  background-color: ${props => props.theme.colors.color1};
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  position: relative;
`;

const DDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const SLeftSection = styled.div`
  background-color: ${props => props.theme.colors.color2};
  display: flex;
  justify-content: center;
`;

const SRightSection = styled.div`
  background-color: ${props => props.theme.colors.color3};

`;

class Intro extends React.Component {
  render() {
    return (
      <SSection className="section intro" id="section-intro">
          <SLeftSection>
            <DDiv className="content">
              <Logo text="BLD"></Logo>
            </DDiv>
          </SLeftSection> 
          <SRightSection></SRightSection> 
      </SSection>
    );
  }
};

export default Intro;
