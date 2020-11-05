import React  from "react";



const ShowTime = (props) => {
   // let numeIntrodus = this.props.location.state.numeIntrodus;
    return (
      <React.Fragment>
       
        <h2>{props.currentTime}</h2>
       
      </React.Fragment>
    );
  }

export default ShowTime;
