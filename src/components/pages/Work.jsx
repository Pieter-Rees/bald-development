import React, { } from 'react';
import styled from 'styled-components';

import Title from '../modules/atoms/Title.jsx';

const SSection = styled.header`
  background-color: ${props => props.theme.colors.color1};
}
`;

class Work extends React.Component {

  render() {
    return (
      <SSection className="section work" id="section-work">
        <div className="content">
          <Title
            text="About"></Title>
        </div>
      </SSection>
    );
  }
};

export default Work;
