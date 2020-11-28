
import React, { Component } from 'react';
import heading from './css/Inline';

class RenderList extends Component{

  render(){
     return ( 
    <React.Fragment>     
      <ul >        
        <li onClick={() => {this.props.handleRemove(this.props.index)}} style={{display: "inline-block", padding: "16 px", textAlign: "center", margin:"16 px", border: "1px solid black", cursor: "pointer" }}>{this.props.letter}</li>
      </ul>
      
    </React.Fragment>   
  );
}
}

export default RenderList;
