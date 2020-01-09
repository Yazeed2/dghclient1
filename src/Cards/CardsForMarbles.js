import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { Card, Col} from 'react-bootstrap'
export default class CardsForMarbles extends Component {
    render() {
        
        return (
<div sm={3} >

                    <Card    style={{ width: '18em', margin: "0 auto"}}>
                        <Card.Img src='https://marble-bajco.com/wp-content/uploads/2018/01/%D8%B1%D8%AE%D8%A7%D9%85-%D9%83%D8%A7%D9%84%D8%A7%D9%83%D9%88%D8%AA%D8%A7-%D8%A8%D9%88%D8%B1%D8%BA%D9%8A%D9%86%D9%8A-1.jpg' />
                        <Card.Body>
                            <Card.Title><h2>{this.props.title}</h2></Card.Title>
                            <Card.Text>   {this.props.description} </Card.Text>
                        </Card.Body>
                    </Card>
</div>
        

        )
    }
}