import React, { } from 'react';
import Title from '../modules/atoms/title.jsx';

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
