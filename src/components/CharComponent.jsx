
import React, { Component } from 'react';
class RenderList extends Component{

  render(){
     return ( 
    <React.Fragment>     
      <ul >        
        <li onClick={() => {this.props.handleRemove(this.props.index)}}>{this.props.letter}</li>
      </ul>
    </React.Fragment>   
  );
}
}

export default RenderList;
