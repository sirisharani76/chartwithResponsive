import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Formfill from './components/Formfill';
import Chart from './components/Chart';

import { Row, Col , Container } from 'react-bootstrap';
import Cards from './components/Cards';


function App() {
 
  return (
    <div>
      
      <Navigation></Navigation>

      <Container className="mt-3">
      <Row >
      <Col sm={6} lg={9}>
      <Chart></Chart>
      </Col>
      
      <Col sm={6} lg={3}>
      <Formfill></Formfill>
      </Col>
      </Row>
      </Container>

      <Cards></Cards>

      
      
    </div>

  );
}

export default App;