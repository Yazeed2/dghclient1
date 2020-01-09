import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'

export default class ShowCard extends Component {
    render() {
        return (
            <div>
                <div className='popup'>  
<div className='popup\_inner'>  

<button onClick={()=>this.props.clicked(null)} style={{marginTop:'100px', marginLeft:'190px', backgroundColor:'rgba(0,0,0,0)', border:'rgba(0,0,0,0)',color:'rgba(225,225,225,0.5)'}} >X</button>  

<Carousel style={{width:'70%', margin:'auto',}}>
                                  {this.props.images.map(img=><Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
      style={{borderRadius:'5px'}}
    />

    <Carousel.Caption>
   
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
    </Carousel.Caption>
  </Carousel.Item>)}
  
</Carousel>
</div>  
</div>  
                             
            </div>
        )
    }
}
