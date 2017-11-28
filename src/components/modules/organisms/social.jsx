import React, { } from 'react';
import styled from 'styled-components';
import FaBeer from 'react-icons/lib/fa/beer';

const SSocial = styled.div`
  flex: 1;
`
const SocialList = styled.ul`
  display: flex;
`;
const SocialListItem = styled.li`
  list-style: none;
  flex: 1;
`;

class Social extends React.Component {

  render() {
    return (
      <SSocial className='social'>
        <SocialList className='social-list'>
          <SocialListItem><FaBeer /></SocialListItem>
          <SocialListItem><FaBeer /></SocialListItem>
          <SocialListItem><FaBeer /></SocialListItem>
        </SocialList>
      </SSocial>
    );
  }
};

export default Social;
