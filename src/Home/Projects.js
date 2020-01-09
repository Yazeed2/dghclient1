import React, { Component } from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'
import CardsProjects from '../Cards/CardsProjects'
import ShowCard from '../Cards/ShowCard'
import { Route, BrowserRouter, Switch,useHistory} from 'react-router-dom';
import EditProject from '../Edit/EditProject'
import AddProject from '../Edit/AddProject'
// const history = useHistory();

export class Projects extends Component {
    state={
        images:null,
        add:false
    }
    clicked=(images)=>{
      this.setState({
        images:images
      })

    }
    addProject = (whatever)=>{
      this.setState({add:whatever})
    }
    render() {
      return (
            <div className="body1">
              {!this.state.images? 
              <>
{this.state.add?<AddProject addProject={this.addProject}/> :  <> <Button onClick={()=>this.addProject(true)} variant="primary" size="lg" block>
    Add a new Project+
  </Button>
              {/* <Card className="bg-dark text-white " style={{marginBottom:'5px'}} >
  <Card.Img src="https://placehold.it/1000x270" alt="Card image" className="cards"/>
  <Card.ImgOverlay className='details'>

    <Card.Title className="text-center">Card title</Card.Title>
    <Card.Text className="text-center">
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text className="text-center"> Last updated 3 mins ago</Card.Text>
    
  </Card.ImgOverlay>
</Card> */}
<Row style={{padding: '0 10px'}}>
{this.props.projects.map(data=>
<CardsProjects data={data} clicked={this.clicked}/>
)}
</Row>
           
</>}
</>: <EditProject clicked={this.clicked} data={this.state.images} />}
       </div>
       
        
    )
        
    }
}

export default Projects