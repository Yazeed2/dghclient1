import React, { Component } from 'react'
import {Button,InputGroup,FormControl} from 'react-bootstrap'
import Axios from 'axios'

export default class EditProject extends Component {
    state={
        delete:false,
        imagesUrl :[],
        images : [],
        numChildren: 1,
        load: true,

    }
    submit=()=>{
        Axios.put('https://dghinteriors.herokuapp.com/add/projects/'+this.props.data._id, 
        {
            title:this.state.title,
            images:this.state.images,
            description:this.state.description
        }
        )
        .then(data=>{
      
                alert('created a new project')
                window.location.reload();

            
        })
        .catch(err=>console.log(err)) 
    }
    delete=()=>{
        Axios.delete('https://dghinteriors.herokuapp.com/add/project/'+this.props.data._id)
        .then(data=>{
            alert('this project is deleted')
            window.location.reload()
        })
        .catch(err=>console.log(err)
        )
    }
    
    componentDidMount(){
        this.setState({
            title: this.props.data.title,
            description: this.props.data.description,
            imagesUrl : this.props.data.images,
            numChildren:this.props.data.images.length
        })
        this.props.data.images.map((url, i)=>{
          this.setState({
            [i]:url
          })
        })
        console.log(this.props);
        
    }
    addImageUrl = (e) =>{
      let i = e.target.name
      this.setState({[i]:e.target.value})
     this.state.images[i] = e.target.value
     console.log(this.state);
     
        
    }
    addImage=()=>{
        this.state.images.push(1)
        console.log(this.state);
        
    } 
    onRemoveChild=()=>{
        this.setState({
            imagesUrl:this.state.images.pop(),
            numChildren: this.state.numChildren - 1,
            [this.state.numChildren-1]:''
          })
          console.log(this.state);
          
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
      onAddChild = () => {
        this.setState({
          numChildren: this.state.numChildren + 1
        })
        console.log(this.state);
        
    }
    render() {
   
        const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<>
        <img className="projectImages" src={this.state[i]} />
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text  id="inputGroup-sizing-sm">Image</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
        value={this.state[i]}
        onChange={this.addImageUrl} 
        name={i}
        aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
     
    </>);
    };

        return (
            <div>
                 <Button onClick={()=>this.props.clicked(null)} variant="danger">Cancel X</Button>
<br />

<div className="forms">

<InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text   id="inputGroup-sizing-default">Title</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
   value={this.state.title}
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
    <FormControl
    value={this.state.description}
    onChange={this.onChange} name="description" as="textarea" aria-label="With textarea" />
  </InputGroup>

  <Button className="btn" onClick={this.submit} variant="success" size="lg" block>Submit</Button>
    </div>

<div className="forms">
  <Button variant="primary" size="lg" block>Edit </Button>
 
<Button onClick={()=>this.setState({delete:!this.state.delete})} variant="danger" size="lg" block>Delete X</Button>
{this.state.delete? <div className="deleting">
      <h4>Are you sure?</h4>
      <div>
      <Button className="btn" variant="danger" onClick={this.delete}>Yes</Button>
      <Button className="btn" variant="primary" onClick={()=>this.setState({delete:false})}>No</Button>
      </div>
  </div>: ''} 
  </div>
            </div>
        )
    }
}
