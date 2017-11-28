import React, { } from 'react';
import Title from '../modules/atoms/title.jsx';
import Paragraph from '../modules/atoms/paragraph.jsx';
import '../../App.scss';

class About extends React.Component {

  render() {
    return (
      <section className="section about" id="section-about">
        <div className="content">
          <Title
            text="Test"></Title>
          <Paragraph text="Short ribs ham hock prosciutto short loin t-bone picanha jowl. Strip steak hamburger ham kielbasa chuck capicola turkey pig andouille cow prosciutto kevin short loin tongue. Drumstick brisket cow buffalo jerky. Shankle pastrami jerky short ribs cow cupim pancetta tri-tip frankfurter salami ground round t-bone drumstick meatball. Hamburger pork loin chuck biltong strip steak cupim pork belly pancetta.">
          </Paragraph>
        </div>

      </section>
    );
  }
};

export default About;
