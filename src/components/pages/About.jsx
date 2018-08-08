import React, { } from 'react';
import styled from 'styled-components';

import Title from '../modules/atoms/Title.jsx';
import Paragraph from '../modules/atoms/Paragraph.jsx';

import Logo from '../modules/atoms/Logo.jsx';
import Wallpaper from '../modules/molecules/Wallpaper.jsx';

const SSection = styled.header`
  background-color: ${props => props.theme.colors.color2};
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  color: #fff;
`;

const DDiv = styled.div`
  display: grid;
  flex-direction: column;
`;

const STopLeftSection = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 2;
  background-color: ${props => props.theme.colors.color3};
`;

const STopRightSection = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SBottomLeftSection = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
`;

const SBottomRightSection = styled.div`
padding: 1em;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.color3};
`;

class About extends React.Component {
  render() {
    return (
      <SSection className="section about" id="section-about">
        <STopLeftSection>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra mollis tellus. Nullam sollicitudin sollicitudin mi. Ut pretium tincidunt condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas aliquam laoreet nibh. Nullam finibus metus at neque scelerisque, et posuere nisl lacinia. Nunc tristique erat ut odio vestibulum tempus. Nunc porta tincidunt magna at cursus. Curabitur non odio odio. Praesent ut tincidunt quam.
          </p> 
        </STopLeftSection>
        <STopRightSection></STopRightSection>
        <SBottomLeftSection></SBottomLeftSection>
        <SBottomRightSection></SBottomRightSection>
      </SSection>
    );
  }
};

export default About;
