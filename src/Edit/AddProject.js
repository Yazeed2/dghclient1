import React, { Component } from 'react'
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import Axios from 'axios'
export default class AddProject extends Component {
    state={
        images : [1],
        imagesUrl :[],
        map:[],
        numChildren: 1,
        load: true

    }
    submit=()=>{
        Axios.post('https://dghinteriors.herokuapp.com/add/projects', 
        {
            title:this.state.title,
            images:this.state.imagesUrl,
            description:this.state.description
        }
        )
        .then(data=>{
      
                alert('created a new project')
                window.location.reload();

            
        })
        .catch(err=>console.log(err)) 
    }
    onAddChild = () => {
        this.setState({
          numChildren: this.state.numChildren + 1
        })
    }
    onChange = (e) => {
  
    if (e.target.value.length > 0) {
      this.setState({
        [e.target.name]: e.target.value,
        [e.target.name + "lable"]: false
      })
      
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        [e.target.name + "lable"]: true
      })
    }
    console.log(this.state);
    
  }
addImageUrl = (e) =>{
    let i = e.target.name
 this.state.imagesUrl[i] = e.target.value
 this.state.images[i] = e.target.value
 console.log(this.state);
 
    
}
addImage=()=>{
    this.state.images.push(1)
    console.log(this.state);
    
} 
onRemoveChild=()=>{
    this.setState({
        imagesUrl:this.state.imagesUrl.pop(),
        numChildren: this.state.numChildren - 1
      })
      console.log(this.state);
      
}
     

    render() {
       
    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<>
        <img className="projectImages" src={this.state.images[i]} />
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text  id="inputGroup-sizing-sm">Image</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
        
        onChange={this.addImageUrl} 
        name={i}
        aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
     
    </>);
    };

        return (
            
            <div>
                  <Button onClick={()=>this.props.addProject(false)} variant="danger">Cancel X</Button>
<br /> 
<div className="forms">

<InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    onChange={this.onChange} 
    name="title"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
{children}
<Button className="addbtn" onClick={this.onAddChild} variant="primary">+</Button>
<Button className="addbtn" onClick={this.onRemoveChild} variant="primary">-</Button>
<Button className="addbtn" onClick={()=>this.setState({load :!this.state.load})} variant="outline-primary"> &#8635;</Button>

<InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Description</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl onChange={this.onChange} name="description" as="textarea" aria-label="With textarea" />
  </InputGroup>

  <Button className="btn" onClick={this.submit} variant="success" size="lg" block>Submit</Button>
    </div>

 
            </div>
        )
    }
}
