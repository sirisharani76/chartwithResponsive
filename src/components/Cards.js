import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

function Cards() {
return (

<div >
<Container>
<Row>
<Col sm={4} className="mt-4">              
<Card border="dark shadow"  >
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col> 
  <Col sm={4} className="mt-4"> 
  <Card border="dark shadow" >
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col> 

  <Col sm={4} className="mt-4"> 
  <Card border="dark shadow" >
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col> 

  </Row> 
  </Container>   
</div>
                          
);
}

export default Cards;