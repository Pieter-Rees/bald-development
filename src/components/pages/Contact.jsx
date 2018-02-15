import React, { } from 'react';
import styled from 'styled-components';

import Title from '../modules/atoms/Title.jsx';

const SSection = styled.header`
  background-color: ${props => props.theme.colors.color1};
}
`;

class Contact extends React.Component {

  render() {
    return (
      <SSection className="section contact" id="section-contact">
        <div className="content">
          <Title
            text="Contact"></Title>
        </div>
      </SSection>
    );
  }
};

export default Contact;
