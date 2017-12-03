import React, { } from 'react';
import styled from 'styled-components';

import Title from '../modules/atoms/Title.jsx';

class Contact extends React.Component {

  render() {
    return (
      <section className="section contact" id="section-contact">
        <div className="content">
          <Title
            text="Contact"></Title>
        </div>
      </section>
    );
  }
};

export default Contact;
