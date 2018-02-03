import React, { } from 'react';
import styled from 'styled-components';

var Grid = require('react-purecss').Grid;
var Row = require('react-purecss').Row;
var Col = require('react-purecss').Col;

const SMenu = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  left: 0;
  top: 0;
  background-color: rgba(0,0,0, .3);
`;

class Menu extends React.Component {

  render() {
    return (
      <SMenu>
        <Grid>
             <Row>
                 <Col defaultSize="1-2" largeSize="1-4">Some content</Col>
                 <Col defaultSize="1-2" largeSize="3-4">Some content</Col>
             </Row>
             <Row>
                 <Col defaultSize="2-24" smallSize="4-25">Some content</Col>
                 <Col defaultSize="22-24" smallSize="21-25">Some content</Col>
             </Row>
         </Grid>
      </SMenu>
    );
  }
};

export default Menu;
