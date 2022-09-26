import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./cardMenu.styles.scss";
const CardMenu = () => {
    // const img = BgIMG
    return (
        <Row xs={1} md={2}>
        
          <Col className="card-menu-body">
            <Card >
              <Card.Body>
                <Card.Title className="card-menu-title">Start Something</Card.Title>
                <Card.Text className="card-menu-text">
                  Do something from scratch.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="card-menu-body">
            <Card >
              <Card.Body>
                <Card.Title className="card-menu-title">Edit Something</Card.Title>
                <Card.Text className="card-menu-text">
                  View and edit things.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="card-menu-body">
            <Card >
              <Card.Body>
                <Card.Title className="card-menu-title">Create Something</Card.Title>
                <Card.Text className="card-menu-text">
                  Create something from scratch.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="card-menu-body">
            <Card >
              <Card.Body>
                <Card.Title className="card-menu-title">Edit Something</Card.Title>
                <Card.Text className="card-menu-text">
                View and edit things.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          
        
      </Row>
    );
}

export default CardMenu;
