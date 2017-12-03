import React, { } from 'react';
import styled from 'styled-components';

import Title from '../modules/atoms/Title.jsx';
import Paragraph from '../modules/atoms/Paragraph.jsx';

import Logo from '../modules/atoms/Logo.jsx';

class About extends React.Component {

  render() {
    return (
      <section className="section about" id="section-about">
        <div className="content">
          <Logo text="BLD."></Logo>
        </div>
      </section>
    );
  }
};

export default About;
