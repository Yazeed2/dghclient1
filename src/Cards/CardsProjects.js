import React, { Component } from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'


export default class CardsProjects extends Component {
    render() {
      console.log('here');
      
        return (
            <Col sm={6} style={{padding: '5px'}}>
            <Card className="bg-dark text-white" onClick={()=>this.props.clicked(this.props.data)}>
              <Card.Img src={this.props.data.images[0]} alt="Card image" />
              <Card.ImgOverlay className='details'>
              <Card.Title className="text-center">{this.props.data.title}</Card.Title>
                <Card.Text className="text-center">
               {this.props.data.description}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            {/* this is  */}
            </Col>
        )
    }
}

