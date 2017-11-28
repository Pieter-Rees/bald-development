import React, { } from 'react';
import Title from '../modules/atoms/title.jsx';

class Work extends React.Component {

  render() {
    return (
      <section className="section work" id="section-work">
        <div className="content">
          <Title
            text="About"></Title>
        </div>
      </section>
    );
  }
};

export default Work;
